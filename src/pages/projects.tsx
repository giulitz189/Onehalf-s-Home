import React, { FC } from "react";
import type { HeadFC, PageProps } from "gatsby";

import MainLayout from "../components/MainLayout/MainLayout";

const ProjectsPage: FC<PageProps> = () => {
  return <MainLayout></MainLayout>;
};

export default ProjectsPage;

export const Head: HeadFC = () => <title>OneHalf's Home - Projects</title>;
