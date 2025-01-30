import React from "react";
import styles from "./TheyTrustUs.module.css";
import { motion } from "framer-motion";
import { SectionTitle } from "../../shared";
import { TrustUsCompanies } from "../../assets";

export const TheyTrustUs: React.FC = () => {
  const logos = [...TrustUsCompanies, ...TrustUsCompanies];

  return (
    <section className={styles.theyTrustUs}>
      <SectionTitle color="#000000">Нам доверяют</SectionTitle>
      <div className={styles.logoWrapper}>
        <motion.div
          className={styles.theyTrustUs_logos}
          animate={{ x: ["0%", "-50%"] }}
          transition={{ ease: "linear", duration: 10, repeat: Infinity }}
        >
          {logos.map(({ id, logo, name }, index) => (
            <div key={id + "-" + index} className={styles.logo}>
              <img src={logo} alt={name} />
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};
