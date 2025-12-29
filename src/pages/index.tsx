import React, { FC, useState } from "react";
import type { HeadFC, PageProps } from "gatsby";

import { mainFrameStyles, headerStyles, contentStyles } from "../styles/pages";
import { HamburgerIcon } from "../components/HamburgerMenuIcon";

const IndexPage: FC<PageProps> = () => {
  const [menuOpened, setMenuOpened] = useState(false);

  return (
    <div style={mainFrameStyles}>
      <div style={headerStyles}>
        <HamburgerIcon
          opened={menuOpened}
          onClick={() => setMenuOpened(!menuOpened)}
        />
      </div>
      <div style={contentStyles}></div>
    </div>
  );
};

export default IndexPage;

export const Head: HeadFC = () => <title>OneHalf's Home</title>;
