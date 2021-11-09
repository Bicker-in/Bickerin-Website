import React, { FunctionComponent } from 'react';

const CenterFullScreen: FunctionComponent = ({ children }) => (
  <div
    className="h-screen flex flex-col justify-center items-center gap-y-10"
  >
    {children}
  </div>
);

export default CenterFullScreen;
