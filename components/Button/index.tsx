import React, { FunctionComponent } from "react";

const Button: FunctionComponent = ({ children }) => {
  return <button className="reg-button">{children}</button>;
};

export default Button;
