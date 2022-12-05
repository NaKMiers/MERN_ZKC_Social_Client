import React from 'react'
import styles from './FollowerCard.module.scss'
import {followers} from '../../Data/FollowerData'

function FollowerCard() {
   return (
      <div className={styles.followerCard}>
         <h3>Who is following you</h3>

         {followers.map((follower, index) => (
            <div key={index} className={styles.follower}>
               <div className={styles.contentWrap}>
                  <img className={styles.followerImg} src={follower.img} alt='avatar' />
                  <div className={styles.name}>
                     <span>{follower.name}</span>
                     <span>@{follower.username}</span>
                  </div>
               </div>

               <button className={`${styles.fcButton} button`}>Follow</button>
            </div>
         ))}
      </div>
   )
}

export default FollowerCard
