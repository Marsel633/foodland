import React from 'react'
import styles from './SectionTitle.module.css'

interface ISectionTitle {
    children: React.ReactNode
    color: string
}

export const SectionTitle: React.FC<ISectionTitle> = ({children, color}) => {
  return (
    <h1 style={{ color: `${color}`}} className={styles.title}>{children}</h1>
  )
}
