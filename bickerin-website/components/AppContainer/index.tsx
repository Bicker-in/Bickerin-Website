import React, { FunctionComponent } from 'react';
import NavBar from '../NavBar';

const AppContainer: FunctionComponent = ({ children }) => (
  <>
    <NavBar />
    {children}
  </>
);

export default AppContainer;