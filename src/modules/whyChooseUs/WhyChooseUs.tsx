import React from "react";
import styles from "./WhyChooseUs.module.css";
import { OurQualityCard, OurQualityImage, SectionTitle } from "../../shared";
import { Qualities, QualityImage } from "../../assets";

export const WhyChooseUs: React.FC = () => {
  return (
    <section className={styles.whyChooseUs}>
      <SectionTitle color="#000000">
        Почему
        <br /> выбирают нас
      </SectionTitle>
        {Qualities.map(
          ({ title, subtitle, description, id, bgColor, icon, gridArea }) => (
            <OurQualityCard
              title={title}
              subtitle={subtitle}
              description={description}
              id={id}
              bgColor={bgColor}
              icon={icon}
              gridArea={gridArea}
            />
          )
        )}
        {QualityImage.map(({ btnChild, image, id, btnLeft, gridArea }) => (
          <OurQualityImage
            btnChild={btnChild}
            image={image}
            id={id}
            btnLeft={btnLeft}
            gridArea={gridArea}
          />
        ))}
    </section>
  );
};
