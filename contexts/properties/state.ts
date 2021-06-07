import { HomeIcon, UsersIcon } from "@heroicons/react/outline";

type MenuSettings = {
  id: number;
  label: string;
  icon: (_props) => JSX.Element;
};

export type SidebarState = {
  menus: MenuSettings[];
  selectedMenuId: number;
};

export const INITIAL_STATE: SidebarState = {
  menus: [
    { id: 1, label: "Propiedades", icon: HomeIcon },
    { id: 2, label: "Usuarios", icon: UsersIcon },
  ],
  selectedMenuId: 1,
};
