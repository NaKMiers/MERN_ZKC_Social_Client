import React from 'react'
import ProfileSide from '../../components/ProfileSide/ProfileSide'
import PostSide from '../../components/PostSide'
import RightSide from '../../components/RightSide'
import styles from './HomePage.module.scss'

function HomePage() {
   return (
      <div className={styles.homePage}>
         <ProfileSide />
         <PostSide />
         <RightSide />
      </div>
   )
}

export default HomePage
