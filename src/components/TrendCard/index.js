import React from 'react'
import styles from './TrendCard.module.scss'
import { trends } from '../../Data'

function TrendCard() {
   return (
      <div className={styles.trendCard}>
         <h3>Trends for you</h3>

         {trends.map((trend, index) => (
            <div key={index} className={styles.trend}>
               <span>#{trend.name}</span>
               <span>{trend.shares}k shares</span>
            </div>
         ))}
      </div>
   )
}

export default TrendCard
