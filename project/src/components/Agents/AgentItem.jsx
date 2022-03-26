import React from 'react'
import styles from './AgentItem.module.css'
import { Link } from "react-router-dom";

const AgentItem = ({ agent }) => {
  return (
    <Link to={`/agents/detail/${agent.uuid}`}>
      <div className={styles.agentItemCard}>
        <div className={styles.agentItemheading}>
          <h3>{agent.displayName}</h3>
        </div>
        <img className={styles.agentItemImage} 
            src={agent.displayIcon} alt='' />
      </div>
    </Link>
  )
}

export default AgentItem;