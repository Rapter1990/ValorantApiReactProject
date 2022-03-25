import React, { useContext,useEffect} from 'react';
import APIContext from '../context/APIContext'
import AgentList from '../components/Agents/AgentList';
import { LanguageContext} from "../context/LanguageContext";

const Agents = () => {

  const { fetchAgents } = useContext(APIContext);
  const [lang] = useContext(LanguageContext);

  useEffect(()=> {
    fetchAgents(lang);
  }, [lang])

  return (
    <div>
      <AgentList />
    </div>
  );
};

export default Agents;
