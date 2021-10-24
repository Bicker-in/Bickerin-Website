import React, { FunctionComponent } from "react";

interface CenterFullScreenProps {
  vertGap?: "0" | "1" | "5" | "10" | "20";
}
const CenterFullScreen: FunctionComponent<CenterFullScreenProps> = ({
  children,
  vertGap = "10",
}) => (
  <div
    className={`h-screen flex flex-col justify-center items-center gap-y-${vertGap}`}
  >
    {children}
  </div>
);

export default CenterFullScreen;
