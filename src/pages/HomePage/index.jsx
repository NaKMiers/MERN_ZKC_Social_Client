import React from 'react'
import ProfileSide from '../../components/ProfileSide/ProfileSide'
import styles from './HomePage.module.scss'

function HomePage() {
   return (
      <div className={styles.homePage}>
         <ProfileSide />
         <div className={styles.postSide}>postSide</div>
         <div className={styles.rightSide}>rightSide</div>
      </div>
   )
}

export default HomePage
