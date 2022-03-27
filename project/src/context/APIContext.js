import React, { useState } from 'react';
import axios from 'axios';

const APIContext = React.createContext();
const baseURL = "https://valorant-api.com/v1";

export default function APIProvider({ children }) {
    const [agents,setAgents]= useState([]);
    const [gears,setGears]= useState([]);
    const [maps,setMaps]= useState([]);
    const [weapons,setWeapons]= useState([]);

    async function fetchAgents(lang) { setGears((await axios.get(`${baseURL}/agents?isPlayableCharacter=true&language=${lang}`)).data.data) }
    async function fetchMaps(lang) { setWeapons(await axios.get((`${baseURL}/maps?language=${lang}`)).data.data) }
    async function fetchWeapons(lang) { setWeapons((await axios.get(`${baseURL}/weapons?language=${lang}`)).data.data) } 

    return (
        <APIContext.Provider value={{
            fetchAgents, fetchGears,
            fetchMaps, fetchWeapons,
            agents, gears,
            maps, weapons
        }}>
            {children}
        </APIContext.Provider>
    );
}

