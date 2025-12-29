import React, { FC } from "react";

import {
  hamburgerLines,
  line,
  lineBottomOpen,
  lineMiddleOpen,
  lineTopOpen,
} from "../styles/components/HamburgerMenuIcon";

interface HamburgerIconProps {
  opened?: boolean;
  onClick: () => void;
}

export const HamburgerIcon: FC<HamburgerIconProps> = ({ opened, onClick }) => {
  return (
    <div onClick={onClick} style={hamburgerLines}>
      <div style={{ ...line, ...(opened ? lineTopOpen : {}) }}></div>
      <div style={{ ...line, ...(opened ? lineMiddleOpen : {}) }}></div>
      <div style={{ ...line, ...(opened ? lineBottomOpen : {}) }}></div>
    </div>
  );
};
