import React from 'react'
import styles from './MapItem.module.css';

const MapItem = ({ mapItem }) => {

  return (
    <div>
        <img className={styles.mapImage} src={mapItem.splash} alt='carouselImage'></img>
        <p className={styles.mapName}> {mapItem.displayName}</p>
    </div>
  )
}

export default MapItem;