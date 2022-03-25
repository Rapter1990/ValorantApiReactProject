import React, { useContext,useEffect} from 'react';
import APIContext from '../context/APIContext'
import GearList from '../components/Gears/GearList';
import { LanguageContext} from "../context/LanguageContext";

const Gears = () => {
  
  const { fetchGears } = useContext(APIContext);
  const [lang] = useContext(LanguageContext);

  useEffect(()=> {
    fetchGears(lang);
  }, [lang])

  return (
    <div>
      <GearList />
    </div>
  );
};

export default Gears;
