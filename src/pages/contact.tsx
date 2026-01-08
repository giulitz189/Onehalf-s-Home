import React, { FC } from "react";
import type { HeadFC, PageProps } from "gatsby";

import MainLayout from "../components/MainLayout/MainLayout";

const ContactPage: FC<PageProps> = () => {
  return <MainLayout></MainLayout>;
};

export default ContactPage;

export const Head: HeadFC = () => <title>OneHalf's Home - Contact</title>;
