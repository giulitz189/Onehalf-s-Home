import React, { FC } from "react";

import "./NavLink.scss";

interface NavLinkProps {
  to: string;
  label: string;
}

/**
 * Implementation of a navigation link component.
 * @param to Address for linking and navigation purposes
 * @param label Text to be displayed for the link
 */
export const NavLink: FC<NavLinkProps> = ({ to, label }) => {
  return (
    <li>
      <a href={to}>{label}</a>
    </li>
  );
};
