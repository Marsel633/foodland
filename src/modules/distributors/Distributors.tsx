import React from "react";
import styles from "./Dustributors.module.css";
import { SectionTitle } from "../../shared";
import { DistributorsLogo } from "../../assets";

export const Distributors: React.FC = () => {
  return (
    <section className={styles.distributors}>
      <SectionTitle color="#000000">Официальные дистрибьюторы</SectionTitle>
      <div className={styles.distributors_logos}>
        {DistributorsLogo.map(({ id, logo, name }) => (
          <div key={id}><img src={logo} alt={name} /></div>
        ))}
      </div>
    </section>
  );
};
