import React, { FunctionComponent } from 'react';

const CenterContent: FunctionComponent = ({children}) => (
  <div className="flex flex-col items-center justify-center h-full">
    {children}
  </div>
);

export default CenterContent;