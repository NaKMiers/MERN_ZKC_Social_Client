import React from 'react'
import styles from './ProfileCard.module.scss'
import Cover from '../../imgs/cover.jpg'
import Profile from '../../imgs/profileImg.jpg'

function ProfileCard() {
   return (
      <div className={styles.profileCard}>
         <div className={styles.profileImages}>
            <img src={Cover} alt="cover" />
            <img src={Profile} alt="profile" />
         </div>
      </div>
   )
}

export default ProfileCard
