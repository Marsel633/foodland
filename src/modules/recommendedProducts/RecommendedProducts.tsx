import React from "react";
import styles from "./RecommendedProducts.module.css";
import { RecommendedProductCard, SectionTitle } from "../../shared";
import { Container } from "../container";
import { PrimaryButton } from "../../ui-kit";
import { BsArrowLeft } from "react-icons/bs";
import { BsArrowRight } from "react-icons/bs";
import { RecommendedProduct } from "../../assets";

export const RecommendedProducts: React.FC = () => {
  const nums: number[] = [1, 2, 3, 4, 5];
  return (
    <section className={styles.recommendedProducts}>
      <Container>
        <div className={styles.recommendedProducts_header}>
          <div className={styles.recommendedProducts_header_title}>
            <h5>Вам могут понравиться</h5>
            <SectionTitle color="#000000">Рекомендуемые товары</SectionTitle>
          </div>
          <PrimaryButton width={157}>Все товары</PrimaryButton>
        </div>
      <div className={styles.recommendedProducts_cards}>
        {RecommendedProduct.map(({id, title, image, price, weight}) => (
          <RecommendedProductCard
            id={id}
            title={title}
            image={image}
            price={price}
            weight={weight}
          />
        ))}
      </div>
      </Container>
      <div className={styles.recommendedProducts_pageSelect_btns}>
        <button className={styles.pageSelect_arrowBtn}>
          <BsArrowLeft size={25} />
        </button>
        {nums.map((item) => (
          <button className={styles.pageSelect_btn}>{item} </button>
        ))}
        <button className={styles.pageSelect_arrowBtn}>
          <BsArrowRight size={25} />
        </button>
      </div>
    </section>
  );
};
