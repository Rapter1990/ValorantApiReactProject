import React from 'react'
import styles from './Card.module.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const Card = ({data}) => {

  
  return (
      <div className={styles.cardBody}>
        <div className={styles.iconWrapper}>
          <span className={styles.icon}>
            <FontAwesomeIcon className={styles.iconFont} icon={data.icon} size="lg" />
          </span>
        </div>
        <div className={styles.textWrapper}>
          <div className={styles.textWrapperTitle}><span>{ data.title }</span></div>
          <div className={styles.textWrapperDetails}><span>{ data.details }</span></div>
        </div>
      </div>
    )
}

export default Card