import React from "react";

interface ICircleButtonLayout {
  children: React.ReactNode | string | number;
  borderRadius: string;
}

export const CircleButtonLayout: React.FC<ICircleButtonLayout> = ({
  children,
  borderRadius
}) => {
  return (
    <div
      style={{
        backgroundColor: " #93A27C",
        color: "#fff",
        width: "40px",
        height: "40px",
        borderRadius:`${borderRadius}`,
        display: "grid",
        placeItems: "center",
      }}
    >
      {children}
    </div>
  );
};
