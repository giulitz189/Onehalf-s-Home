import React, { FC } from "react";

import "./HamburgerMenuIcon.scss";

interface HamburgerIconProps {
  opened?: boolean;
  onClick: () => void;
}

/**
 * Hamburger menu icon component
 * @param opened Indicates whether the menu is opened or closed
 * @param onClick Function to handle click events on the hamburger icon
 */
export const HamburgerIcon: FC<HamburgerIconProps> = ({ opened, onClick }) => {
  return (
    <div className="hamburger-lines" onClick={onClick}>
      <div className={`line${opened ? " top-open" : ""}`}></div>
      <div className={`line${opened ? " middle-open" : ""}`}></div>
      <div className={`line${opened ? " bottom-open" : ""}`}></div>
    </div>
  );
};
