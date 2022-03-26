import React from 'react'
import styles from './WeaponDamageCard.module.css';
import { useTranslation } from 'react-i18next';

const WeaponDamageCard = ({damageRange}) => {

  const { t } = useTranslation();

  return (
    <div className={styles.weaponDamageCard}>
      <p className={styles.range}>
      {damageRange.rangeStartMeters} -&nbsp;
      {damageRange.rangeEndMeters} m
      </p>
      <div className={styles.damageInfo}>
        <p className={styles.damageType}>
          {t('Head')}
          <span className={styles.damageValue}>
            {damageRange.headDamage.toFixed(2)}
          </span>
        </p>
        <p className={styles.damageType}>
          {t('Body')}
          <span className={styles.damageValue}>
            {damageRange.headDamage.toFixed(2)}
          </span>
        </p>
        <p className={styles.damageType}>
          {t('Legs')}
          <span className={styles.damageValue}>
            {damageRange.headDamage.toFixed(2)}
          </span>
        </p>
      </div>
    </div>
  );
}

export default WeaponDamageCard;