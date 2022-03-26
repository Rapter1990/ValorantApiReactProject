import React from 'react'
import styles from './GearItem.module.css'
import { useTranslation } from 'react-i18next';

const GearItem = ({ gear }) => {

  const { t } = useTranslation();

  return (
    <div className={styles.gearItemCard}>
      <img className={styles.gearItemImage} 
           src={gear.displayIcon} alt='' />
      <div className={styles.gearItemInfo}>
        <h3 className={styles.gearItemtextColor}>{gear.displayName}</h3>
        <p className={styles.gearItemtextColor}>{gear.description}</p>
        <br />
        <p className={styles.gearItemtextColor}>{t('Cost')} : {gear.shopData.cost}</p>
        <p className={styles.gearItemtextColor}>{t('Category')} : {gear.shopData.category}</p>
        <p className={styles.gearItemtextColor}>{t('Category Text')} : {gear.shopData.categoryText}</p>
      </div>
    </div>
  )
}

export default GearItem;