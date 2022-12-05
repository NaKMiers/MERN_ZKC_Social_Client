import React from 'react'
import LogoSearch from '../LogoSearch'
import ProfileCard from '../ProfileCard'
import styles from './ProfileSide.module.scss'

function ProfileSide() {
   return (
      <div className={styles.profileSide}>
         <LogoSearch />
         <ProfileCard />
      </div>
   )
}

export default ProfileSide
