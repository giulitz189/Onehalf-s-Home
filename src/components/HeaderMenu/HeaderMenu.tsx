import React, { FC } from "react";

import "./HeaderMenu.scss";
import { menuLinks } from "../../utils/constants";
import { NavLink } from "../NavLink/NavLink";

interface HeaderMenuProps {
  menuOpened: boolean;
}

/**
 * Menu component displayed in the header.
 * @param menuOpened Indicates whether the menu is opened or closed
 */
export const HeaderMenu: FC<HeaderMenuProps> = ({ menuOpened }) => {
  return (
    <div className={`menu${menuOpened ? " opened" : ""}`}>
      <ul>
        {menuLinks.map((link) => (
          <NavLink key={link.path} to={link.path} label={link.name} />
        ))}
      </ul>
    </div>
  );
};
