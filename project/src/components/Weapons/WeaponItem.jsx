import React from 'react'
import WeaponDamageCard from './WeaponDamageCard';
import styles from './WeaponItem.module.css'
import { useTranslation } from 'react-i18next';

const WeaponItem = ({weapon}) => {

  const { t } = useTranslation();

  return (
    <div className={styles.weaponItemCard}>
      <img className={styles.weaponItemImage} 
           src={weapon.displayIcon} alt='' />
      <div>
        <h3 className={styles.weaponItemDisplayNameTextColor}>{weapon.displayName}</h3>
        {weapon.weaponStats?.fireRate &&
          <p className={styles.weaponItemInfoColor}>{t('Fire Rate')} : {weapon.weaponStats?.fireRate}</p>
        }
        {weapon.weaponStats?.magazineSize &&
          <p className={styles.weaponItemInfoColor}>{t('Magazine Size')} : {weapon.weaponStats?.magazineSize}</p>
        }
        {weapon.weaponStats?.reloadTimeSeconds &&
          <p className={styles.weaponItemInfoColor}>{t('Reloaded Time')} : {weapon.weaponStats?.reloadTimeSeconds}s</p> 
        }
        {weapon.shopData?.cost &&
          <p className={styles.weaponItemInfoColor}>{t('Cost')} : {weapon.shopData?.cost}</p>
        }
        {weapon.shopData?.category &&
          <p className={styles.weaponItemInfoColor}>{t('Category')} : {weapon.shopData?.category}</p>
        }
        <div className={styles.weaponDamageContainer}>
          {weapon.weaponStats?.damageRanges?.map((damageRange, index) => (
            <WeaponDamageCard key={index} damageRange={damageRange} />
          ))}
        </div>
      </div>

    </div>
  )
}

export default WeaponItem;