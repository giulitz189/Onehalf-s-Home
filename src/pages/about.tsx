import React, { FC } from "react";
import type { HeadFC, PageProps } from "gatsby";

import MainLayout from "../components/MainLayout/MainLayout";

const AboutPage: FC<PageProps> = () => {
  return <MainLayout></MainLayout>;
};

export default AboutPage;

export const Head: HeadFC = () => <title>OneHalf's Home - About</title>;
