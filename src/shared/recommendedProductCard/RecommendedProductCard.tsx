import React from "react";
import { IRecommendedProduct } from "../../assets";
import { PrimaryButton } from "../../ui-kit";
import styles from "./RecommendedProductCard.module.css";

export const RecommendedProductCard: React.FC<IRecommendedProduct> = ({
  id,
  image,
  title,
  price,
  weight,
}) => {
  return (
    <div className={styles.recommendedProduct_card} key={id}>
      <div className={styles.card_img}>
        <img src={image} alt={title} />
      </div>
      <h5 className={styles.card_title}>{title}</h5>
      <p className={styles.card_weight}>Вес: {weight} кг</p>
      <div className={styles.card_addToCart}>
        <div className={styles.card_price}>
          {price}
          <u>c</u>
        </div>
        <div className={styles.addToCart_btns}>
          <button className={styles.addToCart_btn}>+</button>
          <p>1</p>
          <button className={styles.addToCart_btn}>-</button>
        </div>
      </div>
      <PrimaryButton width={258}>В корзину</PrimaryButton>
    </div>
  );
};
