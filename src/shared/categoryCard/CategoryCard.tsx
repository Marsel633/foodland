import React from 'react'
import { PrimaryButton } from '../../ui-kit'
import styles from "./CategoryCard.module.css"
import { ICategory } from '../../assets'

export const CategoryCard: React.FC<ICategory> = ({title, image, id}) => {
  return (
    <div key={id} className={styles.category_card}>
        <div className={styles.card_image}><img src={image} alt={title} /></div>
        <div className={styles.card_content}>
            <h3 className={styles.card_title}>{title}</h3>
            <PrimaryButton width={250}>Подробнее</PrimaryButton>
        </div>
    </div>
  )
}
