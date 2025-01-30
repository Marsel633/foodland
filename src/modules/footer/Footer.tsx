import React from "react";
import styles from "./Footer.module.css";
import { Container } from "../container";
import { Catalog, FooterNavbar } from "../../assets";
import { IoLogoInstagram } from "react-icons/io";
import { FaFacebookF } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import { CircleButtonLayout } from "../layouts";

export const Footer: React.FC = () => {
  return (
    <footer className={styles.footer}>
      <Container>
        <div className={styles.footer_content}>
            <div className={styles.footer_about}>
              <div>
                <img src="/main_logo.svg" alt="main logo" />
                <p>
                  Ваш путеводитель в области сырья и ингредиентов для пищевой
                  промышленности
                </p>
              </div>
              <div>
                  <p className={styles.about_span}>Контакты</p>
                <p>
                  Г.Бишкек ул. Матросова 1а/21
                  <br />
                  +996 0550 114 477
                </p>
              </div>
            </div>
            <div className={styles.footer_navbar}>
              <div className={styles.navbar_navigation}>
                <h5>Навигация</h5>
                {FooterNavbar.map((item) => (
                  <a key={item} href={`/${item}`}>
                    {item}
                  </a>
                ))}
              </div>
              <div className={styles.navbar_catalog}>
                <h5>Каталог</h5>
                {Catalog.map((item) => (
                  <a key={item} href={`/${item}`}>
                    {item}
                  </a>
                ))}
              </div>
              <div className={styles.navbar_socials}>
                <CircleButtonLayout borderRadius="100%">
                  <IoLogoInstagram size={28} />
                </CircleButtonLayout>
                <CircleButtonLayout borderRadius="100%">
                  <FaFacebookF />
                </CircleButtonLayout>
                <CircleButtonLayout borderRadius="100%">
                  <FaTwitter />
                </CircleButtonLayout>
              </div>
            </div>
        </div>
      </Container>
      <div className={styles.footer_foodland}>
        <tfoot>@FoodLand - 2024</tfoot>
      </div>
    </footer>
  );
};
