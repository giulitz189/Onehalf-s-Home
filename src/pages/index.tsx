import React, { FC, useState } from "react";
import type { HeadFC, PageProps } from "gatsby";

import "../styles/pages/index.scss";
import { HamburgerIcon } from "../components/HamburgerMenuIcon/HamburgerMenuIcon";

const IndexPage: FC<PageProps> = () => {
  const [menuOpened, setMenuOpened] = useState(false);

  return (
    <div className="main-frame">
      <div className="header">
        <HamburgerIcon
          opened={menuOpened}
          onClick={() => setMenuOpened(!menuOpened)}
        />
      </div>
      <div className={`menu${menuOpened ? " opened" : ""}`}></div>
      <div className="content"></div>
    </div>
  );
};

export default IndexPage;

export const Head: HeadFC = () => <title>OneHalf's Home</title>;
