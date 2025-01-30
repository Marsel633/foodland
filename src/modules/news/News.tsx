import React from "react";
import { Container } from "../container";
import { FormattedDateFunction, NewsCard, SectionTitle } from "../../shared";
import { PrimaryButton } from "../../ui-kit";
import styles from "./News.module.css";
import { LastNews } from "../../assets";

export const News: React.FC = () => {
  const { title, description, image, date, link } = LastNews[0];
  return (
    <section className={styles.lastNews}>
      <Container>
        <div className={styles.lastNews_header}>
          <div className={styles.lastNews_header_title}>
            <h5>Последние новости</h5>
            <SectionTitle color="#000000">
              Будьте в курсе о последних новостях
            </SectionTitle>
          </div>
          <PrimaryButton width={157}>Все новости</PrimaryButton>
        </div>
        <div className={styles.lastNews_content}>
          <div className={styles.news_mainNews}>
            <div className={styles.mainNews_image}>
              <img src={image} alt={title} />
            </div>
            <div className={styles.mainNews_content}>
              <div className={styles.mainNews_header}>
                <h5>{title}</h5>
                <p>{FormattedDateFunction(date)}</p>
              </div>
              <p>{description}</p>
              <a href={link}>Читать далее</a>
            </div>
          </div>
          <div className={styles.lastNews_otherNews}>
            {LastNews.slice(1).map(
              ({ id, title, description, image, link, date }) => (
                <NewsCard
                  id={id}
                  title={title}
                  description={description}
                  image={image}
                  link={link}
                  date={date}
                />
              )
            )}
          </div>
        </div>
      </Container>
    </section>
  );
};
