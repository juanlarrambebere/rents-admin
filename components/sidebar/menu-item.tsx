import { MouseEventHandler } from "react";

type Props = {
  icon;
  label: string;
  onClick?: MouseEventHandler<HTMLLIElement>;
};

const MenuItem = ({ icon: Icon, label, onClick }: Props) => {
  return (
    <li key={label} role="button" onClick={onClick} className="flex space-x-4">
      <Icon className="w-5 h-5" />
      <span>{label}</span>
    </li>
  );
};

export default MenuItem;
