import React from 'react'
import Card from '../Elements/Card';
import styles from './CardGridView.module.css'

const CardGridView = ({data}) => {
  return (
    <div className={styles.cardGridView}>
      {
        data.map((cardData, index) => (
          <Card data={ cardData } key={ "card-id-" + index } />
        ))
      }
    </div>
  )
}

export default CardGridView