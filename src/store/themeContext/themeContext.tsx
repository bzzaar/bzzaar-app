import React, {
  createContext,
  useState,
  useCallback,
  useEffect,
  useContext,
} from "react";
import { themes, Theme } from "./themes";

interface ContextProps {
  theme: Theme;
  toggleLightAndDarkTheme: () => void;
  changeNetworkTheme: (chainID: string) => void;
}

// ? chainId "0" represents unconnected state
export const supportedNetworks: string[] = ["0", "1", "1337", "5"];

export const ThemeContext = createContext({} as ContextProps);

const networkThemes = {
  1: themes.mainnet,
  1337: themes.mainnet,
  3: themes.goerli,
  4: themes.goerli,
  5: themes.goerli,
};

export function ThemeProvider(props: any) {
  const [theme, setTheme] = useState(themes.mainnet.light);
  const [lightOrDark, setLightOrDark] = useState("light"); // default to dark theme
  const [networkThemeSet, setNetworkThemeSet] = useState(themes.mainnet); // default to mainnet theme set

  const toggleLightAndDarkTheme: any = useCallback(
    () => {
      if (theme.name === "dark") {
        setLightOrDark("light");
        window.localStorage.setItem("theme", "light");
        setTheme(networkThemeSet.light);
      } else {
        setLightOrDark("dark");
        window.localStorage.setItem("theme", "dark");
        setTheme(networkThemeSet.dark);
      }
    }, // eslint-disable-next-line
    [theme]
  );

  const changeNetworkTheme = (chainID: string) => {
    if (supportedNetworks.includes(chainID)) {
      setNetworkThemeSet(networkThemes[chainID]);
      setTheme(networkThemeSet[lightOrDark]);
    } else {
      setNetworkThemeSet(networkThemes["1"]);
      setTheme(networkThemeSet[lightOrDark]);
    }
  };
  useEffect(() => {
    const localTheme = window.localStorage.getItem("theme");

    if (localTheme) {
      setLightOrDark(localTheme);
      setTheme(networkThemeSet[lightOrDark]);
    }
  }, [networkThemeSet, lightOrDark]);

  const value = {
    theme,
    toggleLightAndDarkTheme,
    changeNetworkTheme,
  };

  return (
    <ThemeContext.Provider value={value}>
      {props.children}
    </ThemeContext.Provider>
  );
}

export const useTheme = () => {
  return useContext(ThemeContext);
};
