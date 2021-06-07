export enum PropertiesActions {
  SET_SELECTED_MENU_ID,
}

export type PropertiesAction = {
  type: PropertiesActions.SET_SELECTED_MENU_ID;
  selectedMenuId: number;
};
