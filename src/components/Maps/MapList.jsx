import React,{ useContext } from 'react'
import APIContext from '../../context/APIContext'
import styles from './MapList.module.css';
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import MapItem from './MapItem';

const MapList = () => {
  const { maps } = useContext(APIContext);
  
  return (
    <div className={styles.mapList}>
      <Carousel
            infiniteLoop
            showStatus={false}
            showThumbs={false}
            dynamicHeight={false}
            swipeable={true}
          >
            {maps?.map((map, index) => (
              <MapItem mapItem={map} key={index}/>
            ))}
      </Carousel>
    </div>
  )
}

export default MapList;