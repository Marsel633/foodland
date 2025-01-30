import React from "react";
import { Container } from "../container";
import { SectionTitle } from "../../shared";
import { PrimaryButton } from "../../ui-kit";
import WeHelpingItemImg from '/sectionBg.png'
import styles from "./WeHelping.module.css";

export const WeHelping: React.FC = () => {
  return (
    <section className={styles.weHelping}>
      <Container>
        <SectionTitle color="#000000">
          Мы помогаем местным кондитерам и шеф-поварам претворять в жизнь свои
          самые смелые кулинарные задумки
        </SectionTitle>
        <div className={styles.weHelping_content}>
          <div className={styles.weHelping_item}>
            <p>
            — Мы предлагаем вам не просто сырье, а экспертность и индивидуальный
              подход: всегда готовы помочь найти альтернативу, закрыть срочную
              потребность или предложить уникальное решение.
            </p>
          </div>
          <div className={styles.weHelping_itemImg}>
            <img src={WeHelpingItemImg} alt="A man adds nuts to a dessert" />
            <PrimaryButton width={170}>Читать далее</PrimaryButton>
          </div>
        </div>
      </Container>
    </section>
  );
};
