import React, { useContext,useEffect} from 'react';
import APIContext from '../context/APIContext'
import MapList from '../components/Maps/MapList';
import { LanguageContext} from "../context/LanguageContext";

const Maps = () => {

  const { fetchMaps } = useContext(APIContext);
  const [lang] = useContext(LanguageContext);

  useEffect(()=> {
    fetchMaps(lang);
  }, [lang])

  return (
    <div>
      <MapList />
    </div>
  );
}

export default Maps;