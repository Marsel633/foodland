import React from "react";
import { Navbar } from "./Navbar";
import { CiUser } from "react-icons/ci";
import { CiLock } from "react-icons/ci";
import styles from './Header.module.css'

export const Header: React.FC = () => {
  return (
    <header className={styles.header}>
      <div className={styles.header_mainLogo}>
        <img src="/main_logo.svg" alt="Main logo" />
      </div>
      <Navbar />
      <div className={styles.header_profileSettings}>
        <div className={styles.profileSettings_logo}>
          <CiLock size={20} />
        </div>
        <div className={styles.profileSettings_logo}>
          <CiUser size={20} />
        </div>
      </div>
    </header>
  );
};
