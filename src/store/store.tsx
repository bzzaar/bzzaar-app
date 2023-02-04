import React, { useContext, useReducer } from "react";
import { useActions } from "./action";
import { applyMiddleware } from "./middleware";
import { initialState, IState, reducer } from "./reducers";

interface IContextProps {
  state: IState;
  actions: any;
}

export const StoreContext = React.createContext({} as IContextProps);

export function StoreProvider(props: any) {
  const [state, dispatch] = useReducer(reducer, initialState);
  const actions = useActions(state, applyMiddleware(dispatch));
  const value = { state, actions };

  return (
    <StoreContext.Provider value={value}>
      {props.children}
    </StoreContext.Provider>
  );
}

export const useStore = () => {
  return useContext(StoreContext);
};
