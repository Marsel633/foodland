import React from "react";
import { Header } from "../header";
import { Container } from "../container";
import { SectionTitle } from "../../shared";
import { PrimaryButton } from "../../ui-kit";
import MainBg from "/mainBg.png"
import styles from './HomePage.module.css'

export const HomePage: React.FC = () => {
  return (
    <section className={styles.homepage}>
      <Container>
        <Header />
      <div className={styles.homepage_bgImg}>
        <img src={MainBg} alt="Main background image" />
      </div>
      <div className={styles.homepage_title}>
          <SectionTitle color="#ffffff">
            Ваш путеводитель в области сырья
          </SectionTitle>
          <div>
            <input className={styles.homepage_searchInput} type="text" placeholder="Найти..."/>
        <PrimaryButton width={193}>Заказать звонок</PrimaryButton>
          </div>
      </div>
      </Container>
    </section>
  );
};
