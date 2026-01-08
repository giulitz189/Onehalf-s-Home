import React, { FC, ReactNode, useState } from "react";

import "./MainLayout.scss";
import { HamburgerIcon } from "../HamburgerMenuIcon/HamburgerMenuIcon";
import { HeaderMenu } from "../HeaderMenu/HeaderMenu";

interface MainLayoutProps {
  children?: ReactNode;
}

/**
 * Main layout component that includes header and menu.
 */
const MainLayout: FC<MainLayoutProps> = ({ children }) => {
  const [menuOpened, setMenuOpened] = useState(false);

  return (
    <div className="main-frame">
      <div className="header">
        <HamburgerIcon
          opened={menuOpened}
          onClick={() => setMenuOpened(!menuOpened)}
        />
      </div>
      <HeaderMenu menuOpened={menuOpened} />
      <div className="content">{children}</div>
    </div>
  );
};

export default MainLayout;
