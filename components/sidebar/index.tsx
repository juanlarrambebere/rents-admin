import {
  CalendarIcon,
  CashIcon,
  ChevronLeftIcon,
  ChevronRightIcon,
  HomeIcon,
  UsersIcon,
} from "@heroicons/react/outline";
import { AnimatePresence, motion } from "framer-motion";
import React, { useState } from "react";
import MenuItem from "./menu-item";

type SidebarTogglerProps = {
  isOpen: boolean;
  onClick: () => void;
  className?: string;
};

const SidebarToggler = ({
  isOpen,
  onClick,
  className,
}: SidebarTogglerProps) => {
  return isOpen ? (
    <ChevronLeftIcon
      onClick={onClick}
      className={`h-5 w-5 z-50 ${className}`}
    />
  ) : (
    <ChevronRightIcon onClick={onClick} className={`h-5 w-5 ${className}`} />
  );
};

const Sidebar = () => {
  const [isOpen, setIsOpen] = useState<boolean>(true);

  return (
    <div className="relative h-full w-80">
      <AnimatePresence>
        {isOpen && (
          <motion.div
            variants={{
              hidden: { opacity: 0, x: -10 },
              visible: { opacity: 1, x: 0 },
            }}
            initial="hidden"
            animate="visible"
            exit="hidden"
            className="flex flex-col h-full space-y-4 bg-white border border-black divide-y shadow-md text-gray-1"
          >
            <h1 className="pt-4 text-xl font-bold text-center">
              Treinta y Tres
            </h1>
            <div className="flex flex-col pl-4 ">
              <h2 className="pt-4 pb-4 font-bold text-md ">Administrar</h2>
              <ul className="flex flex-col space-y-4">
                <MenuItem icon={HomeIcon} label="Propiedades" />
                <MenuItem icon={UsersIcon} label="Usuarios" />
                <MenuItem icon={CalendarIcon} label="Alquileres" />
                <MenuItem icon={CashIcon} label="Alquileres" />
              </ul>
            </div>
          </motion.div>
        )}
        <SidebarToggler
          isOpen={isOpen}
          onClick={() => setIsOpen(!isOpen)}
          className="absolute right-0 top-1/2"
        />
      </AnimatePresence>
    </div>
  );
};

export default Sidebar;
