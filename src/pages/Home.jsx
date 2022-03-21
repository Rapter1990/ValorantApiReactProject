import React from 'react'
import CardGridView from '../components/Elements/CardGridView';
import styles from './css/Home.module.css'
import valorant_home_page_image from '../images/valorant_home.jpeg';
import { faUserCircle,faShield,faGun,faMap } from '@fortawesome/free-solid-svg-icons';
import { useTranslation } from 'react-i18next';

const Home = () => {

  const { t } = useTranslation();

  const CARD_DATA = [
    {
      'title': t('Agents Information'),
      'icon': faUserCircle,
      'details': t('Agents Detail Information'),
      'color': '#e75d5d'
    },
    {
      'title': t('Gears Information'),
      'icon': faShield,
      'details': t('Gear Detail Information'),
      'color': '#e75d5d'
    },
    {
      'title': t('Maps Information'),
      'icon': faMap,
      'details': t('Maps Detail Information'),
      'color': '#e75d5d'
    },
    {
      'title': t('Weapons Information'),
      'icon': faGun,
      'details': t('Weapons Detail Information'),
      'color': '#e75d5d'
    }
  ]
  
  return (
    <div className={styles.homePage}>
      <div>
        <img src={valorant_home_page_image} 
             alt='valorant_home_page_picture' 
             width={950}
             height={600} 
        />
      </div>
      <div className={styles.cardGrid}>
        <CardGridView data={ CARD_DATA } />
      </div>
    </div>
  );
}

export default Home;