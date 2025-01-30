import React from "react";
import { BsArrowUpRight } from "react-icons/bs";
import styles from "./PrimaryButton.module.css";
import { CircleButtonLayout } from "../../modules";


interface IPrimaryButton {
  children: React.ReactNode;
  width: number;
}

export const PrimaryButton: React.FC<IPrimaryButton> = ({
  children,
  width,
}) => {
  return (
    <button style={{ width: `${width}px` }} className={styles.btn}>
      {children}
      <CircleButtonLayout borderRadius="100%">
        <BsArrowUpRight size={20} />
      </CircleButtonLayout>
    </button>
  );
};
