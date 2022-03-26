import React, { useState } from 'react';
import axios from 'axios';

const APIContext = React.createContext();
const baseURL = "https://valorant-api.com/v1";

export const APIProvider = ({ children }) => {

    const [agents,setAgents]= useState([]);
    const [gears,setGears]= useState([]);
    const [maps,setMaps]= useState([]);
    const [weapons,setWeapons]= useState([]);
    

    const fetchAgents = async (lang) =>{
        const response = await axios.get(`${baseURL}/agents?isPlayableCharacter=true&language=${lang}`);
        setAgents(response.data.data);
    }

    const fetchGears = async (lang) =>{
        const response = await axios.get(`${baseURL}/gear?language=${lang}`);
        setGears(response.data.data);
    }

    const fetchMaps = async (lang) =>{
        const response = await axios.get(`${baseURL}/maps?language=${lang}`);
        setMaps(response.data.data);
    }

    const fetchWeapons = async (lang) =>{
        const response = await axios.get(`${baseURL}/weapons?language=${lang}`);
        setWeapons(response.data.data);
    }

    return(
        <APIContext.Provider value={{
            fetchAgents,
            fetchGears,
            fetchMaps,
            fetchWeapons,
            agents,
            gears,
            maps,
            weapons
        }}>
            {children}
        </APIContext.Provider>
    );

}

export default APIContext;

