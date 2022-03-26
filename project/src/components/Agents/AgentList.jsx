import React,{ useContext } from 'react'
import APIContext from '../../context/APIContext'
import AgentItem from './AgentItem'
import styles from './AgentList.module.css'

const AgentList = () => {
  const { agents } = useContext(APIContext);
  
  return (
    <div className={styles.agentList}>
      {agents.map((agent, idx) => (
        <AgentItem agent={agent} key={idx} />
      ))}
    </div>
  )
}

export default AgentList;