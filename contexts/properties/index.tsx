import React, { useReducer } from "react";
import { PropertiesAction, PropertiesActions } from "./actions";
import { INITIAL_STATE, SidebarState } from "./state";

const reducer = (state: SidebarState, action: PropertiesAction) => {
  const newState = { ...state };

  switch (action.type) {
    case PropertiesActions.SET_SELECTED_MENU_ID:
      newState.selectedMenuId = action.selectedMenuId;
      return newState;
    default:
      throw new Error();
  }
};

const SidebarContext = React.createContext<{
  state: SidebarState;
  dispatch: React.Dispatch<PropertiesAction>;
}>({
  state: INITIAL_STATE,
  dispatch: () => undefined,
});

const SidebarContextProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, INITIAL_STATE);

  return (
    <SidebarContext.Provider value={{ state, dispatch }}>
      {children}
    </SidebarContext.Provider>
  );
};

export { SidebarContext, SidebarContextProvider };
