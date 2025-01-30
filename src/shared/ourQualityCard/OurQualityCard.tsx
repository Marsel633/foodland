import React from "react";
import { CircleButtonLayout } from "../../modules";
import { IOurQualityImage, IQuality } from "../../assets";
import styles from "./OurQualityCard.module.css";

export const OurQualityCard: React.FC<IQuality> = ({
  id,
  title,
  subtitle,
  description,
  bgColor,
  icon,
  gridArea,
}) => {
  return (
    <div
      className={styles.quality_card}
      style={{ backgroundColor: `${bgColor}`, gridArea: `${gridArea}` }}
      key={id}
    >
      <h3 className={styles.quality_card_title}>{title}</h3>
      <h5 className={styles.quality_card_subtitle}>{subtitle}</h5>
      <p>{description}</p>
      <CircleButtonLayout borderRadius="5.5px">
        {React.createElement(icon, { size: 25, color: "white" })}
      </CircleButtonLayout>
    </div>
  );
};

export const OurQualityImage: React.FC<IOurQualityImage> = ({
  image,
  btnChild,
  id,
  btnLeft,
  gridArea,
}) => {
  return (
    <div
      style={{ gridArea: `${gridArea}` }}
      className={styles.quality_product_card}
      key={id}
    >
      <div className={styles.product_image}>
        <img src={image} alt={`${btnChild} изображение`} />
      </div>
      <button
        style={{ left: `${btnLeft ? "53px" : "172px"}` }}
        className={styles.product_btn}
      >
        {btnChild}
      </button>
    </div>
  );
};
