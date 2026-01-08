import React, { FC } from "react";
import type { HeadFC, PageProps } from "gatsby";

import MainLayout from "../components/MainLayout/MainLayout";

const BlogPage: FC<PageProps> = () => {
  return <MainLayout></MainLayout>;
};

export default BlogPage;

export const Head: HeadFC = () => <title>OneHalf's Home - Blog</title>;
