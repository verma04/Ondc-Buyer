import React, { ReactChildren, ReactChild } from "react";
import Navbar from "./Navbar";
import Footer from "./Footer";
import NewsLetter from "./NewsLetter";
interface Props {
  children: any;
}

const PageLayout = ({ children }: Props) => {
  return (
    <>
      <Navbar />
      {children}

      <NewsLetter />

      <Footer />
    </>
  );
};

export default PageLayout;
