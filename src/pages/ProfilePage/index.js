import React from 'react'
import styles from './ProfilePage.module.scss'
import ProfileLeft from '../../components/ProfileLeft'
import RightSide from '../../components/RightSide'
import ProfileCard from '../../components/ProfileCard'
import PostSide from '../../components/PostSide'

function ProfilePage() {
   return (
      <div className={styles.profilePage}>
         <ProfileLeft />

         <div className={styles.profileCenter}>
            <ProfileCard location='profilePage' />
            <PostSide />
         </div>

         <RightSide />
      </div>
   )
}

export default ProfilePage
