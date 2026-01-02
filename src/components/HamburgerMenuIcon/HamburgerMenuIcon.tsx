import React, { FC } from "react";

import "./HamburgerMenuIcon.scss";

interface HamburgerIconProps {
  opened?: boolean;
  onClick: () => void;
}

export const HamburgerIcon: FC<HamburgerIconProps> = ({ opened, onClick }) => {
  return (
    <div className="hamburger-lines" onClick={onClick}>
      <div className={`line${opened ? " top-open" : ""}`}></div>
      <div className={`line${opened ? " middle-open" : ""}`}></div>
      <div className={`line${opened ? " bottom-open" : ""}`}></div>
    </div>
  );
};
