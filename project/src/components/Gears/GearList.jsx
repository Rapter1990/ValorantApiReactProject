import React,{ useContext } from 'react'
import APIContext from '../../context/APIContext'
import GearItem from './GearItem'
import styles from './GearList.module.css';

export default function GearList() {
    const { gears } = useContext(APIContext)
    return (
      <div className={styles.gearList}>
        {gears.map((gear, idx) => (
          <GearItem gear={gear} key={idx} />
        ))}
      </div>
    )
}
