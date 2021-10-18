import React, { FunctionComponent } from 'react';
import Footer from '../Footer';
import NavBar from '../NavBar';

const AppContainer: FunctionComponent = ({ children }) => (
  <>
    <NavBar />
    {children}
    <Footer />
  </>
);

export default AppContainer;