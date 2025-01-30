import React from "react";
import { INews } from "../../assets";
import styles from "./NewsCard.module.css";
import { FormattedDateFunction } from "../FormattedDateFunction";

export const NewsCard: React.FC<INews> = ({
  id,
  image,
  title,
  date,
  description,
  link,
}) => {
  return (
    <div className={styles.news_card} key={id}>
      <div className={styles.card_image}>
        <img src={image} alt={title} />
      </div>
      <div className={styles.card_content}>
        <div className={styles.card_header}>
          <h5>{title}</h5>
          <p>{FormattedDateFunction(date)}</p>
        </div>
        <p>{description}</p>
        <a href={link}>Читать далее</a>
      </div>
    </div>
  );
};
