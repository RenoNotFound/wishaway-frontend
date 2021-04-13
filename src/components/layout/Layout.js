import React, { Fragment } from "react";
import Header from "./header/Header";
import Footer from "./footer/Footer";
import { BrowserRouter as Router } from "react-router-dom";

export default function Layout(props) {
  return (
    <Fragment>
      <Header />
      {props.children}
      <Footer />
    </Fragment>
  );
}
