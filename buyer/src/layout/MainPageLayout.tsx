import React, { ReactChildren, ReactChild } from "react";
import Navbar from "./Navbar";
import Footer from "./Footer";
import NewsLetter from "./NewsLetter";
import MainNavbar from "./MainNavbar";
interface Props {
  children: any;
}

const MainPageLayout = ({ children }: Props) => {
  return (
    <>
      <MainNavbar />
      {children}

      <NewsLetter />

      <Footer />
    </>
  );
};

export default MainPageLayout;
