import React from "react";
import styles from "./ProductCategories.module.css";
import { Container } from "../container";
import { CategoryCard, SectionTitle } from "../../shared";
import { Categories } from "../../assets";

export const ProductCategories: React.FC = () => {
  return (
    <section className={styles.productCategories}>
      <Container>
        <SectionTitle color="#493829">
          Просмотр товаров <br/> по{" "}
          <span className={styles.productCategories_title_item}>
            категориям
          </span>
        </SectionTitle>
        <div className={styles.productCategories_cards}>
            {Categories.map(({id, title, image}) => (
                <CategoryCard key={id} title={title} image={image} />
            ))}
        </div>
      </Container>
    </section>
  );
};
