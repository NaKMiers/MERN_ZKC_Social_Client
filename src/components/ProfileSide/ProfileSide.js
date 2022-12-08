import React from 'react'
import LogoSearch from '../LogoSearch'
import ProfileCard from '../ProfileCard'
import FollowerCard from '../FollowerCard'
import styles from './ProfileSide.module.scss'

function ProfileSide() {
   return (
      <div className={styles.profileSide}>
         <LogoSearch />
         <ProfileCard location='homePage' />
         <FollowerCard />
      </div>
   )
}

export default ProfileSide
