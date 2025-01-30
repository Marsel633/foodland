import React from "react";
import styles from './Navbar.module.css'
import { NavbarRoutes } from "../../assets";

export const Navbar: React.FC = () => {
  return (
    <nav className={styles.navbar}>
      <ul className={styles.navbar_items}>
        {NavbarRoutes.map((item) => (
          <li key={item.id}>
            <a href={item.path}>{item.route}</a>
          </li>
        ))}
      </ul>
    </nav>
  );
};
