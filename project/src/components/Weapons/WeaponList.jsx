import React,{ useContext } from 'react'
import APIContext from '../../context/APIContext'
import WeaponItem from './WeaponItem'
import styles from './WeaponList.module.css'

export default function WeaponList() {
    const { weapons } = useContext(APIContext)
    return (
        <div className={styles.weaponList}>
            {weapons.map((weapon, idx) => (
            <WeaponItem weapon={weapon} key={idx} />
          ))}
        </div>
    );
}
