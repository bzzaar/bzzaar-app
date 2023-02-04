import React, {
  createContext,
  useContext,
  useEffect,
  useState,
  useCallback,
  useRef,
} from "react";

interface ContextProps {
  width: number | undefined;
  height: number | undefined;
}

const ViewportContext = createContext({} as ContextProps);

interface Props {
  children: React.ReactNode;
}

export function ViewportProvider(props: Props): JSX.Element {
  const [width, setWidth] = useState(undefined);
  const [height, setHeight] = useState(undefined);

  const handleWindowResize = () => {
    setWidth(window.innerWidth);
    setHeight(window.innerHeight);
  };

  const debounceHandleWindowResize = useDebounce(handleWindowResize, 10);

  // useEffect only runs on client
  useEffect(() => {
    // for first client render
    handleWindowResize();
    // for future resizes
    window.addEventListener("resize", debounceHandleWindowResize);

    return () =>
      window.removeEventListener("resize", debounceHandleWindowResize);
    // eslint-disable-next-line
  }, []);

  return (
    <ViewportContext.Provider value={{ width, height }}>
      {props.children}
    </ViewportContext.Provider>
  );
}

export function useViewport(): ContextProps {
  return useContext(ViewportContext);
}

function useDebounce(fn: any, delay = 0): any {
  // create ref to keep track of latest function calls
  const ref = useRef<any>({ id: 0 });

  // always use latest function passed into useDebounce, avoid need to put fn in dependency array
  ref.current.fn = fn;

  const bouncer = useCallback(
    (...args) => {
      //always create new promise, track resolve, reject
      ref.current.promise = new Promise((resolve, reject) => {
        ref.current.resolve = resolve;
        ref.current.reject = reject;
      });

      if (ref.current.timeout) {
        clearTimeout(ref.current.timeout);
      }

      // clear old timeout if one exists.
      if (ref.current.timeout) {
        clearTimeout(ref.current.timeout);
      }

      ref.current.timeout = setTimeout(async () => {
        // reset timeout for next round
        // set new id for new async function call
        const id = ref.current.id + 1;
        // set latest async call to the one we want to use (to reference)
        ref.current.id = id;

        const checkLatest = () => id === ref.current.id;

        try {
          const response = await ref.current.fn(...args);

          // if this function call is the latest, then resolve, otherwise do nothing (cancel logic)
          if (checkLatest()) ref.current.resolve(response);
        } catch (error) {
          if (checkLatest()) ref.current.reject(error);
        } finally {
          // don't need to reset, but whatever
          if (checkLatest()) ref.current.promise = undefined;
        }

        ref.current.fn(...args);
        ref.current.timeout = undefined;
      }, delay);

      return ref.current.promise;
      // eslint-disable-next-line
    },
    [delay]
  );

  return bouncer;
}

export default useDebounce;
