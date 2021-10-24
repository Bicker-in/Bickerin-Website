import React, { FunctionComponent } from "react";
import Footer from "../Footer";
import NavBar from "../NavBar";

const AppContainer: FunctionComponent = ({ children }) => (
  <>
    <NavBar />
    <main className="min-h-full">{children}</main>
    <Footer />
  </>
);

export default AppContainer;
