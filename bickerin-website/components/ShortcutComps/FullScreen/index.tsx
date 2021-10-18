import React, { FunctionComponent } from 'react';

const FullScreen: FunctionComponent = ({children}) => (
  <div className="h-screen">
    {children}
  </div>
);

export default FullScreen;