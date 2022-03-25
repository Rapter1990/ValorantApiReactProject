import React, { useContext,useEffect} from 'react';
import APIContext from '../context/APIContext'
import WeaponList from '../components/Weapons/WeaponList';
import { LanguageContext} from "../context/LanguageContext";

const Weapons = () => {

  const { fetchWeapons } = useContext(APIContext);
  const [lang] = useContext(LanguageContext);
  
  useEffect(()=> {
    fetchWeapons(lang);
  }, [lang])

  return (
    <div>
      <WeaponList />
    </div>
  );
}

export default Weapons;