import React from 'react'
import styles from './ProfileLeft.module.scss'
import LogoSearch from '../LogoSearch'
import FollowerCard from '../FollowerCard'
import InfoCard from '../InfoCard'

function ProfileLeft() {
   return (
      <div className={styles.profileLeft}>
         <LogoSearch />
         <InfoCard />
         <FollowerCard />
      </div>
   )
}

export default ProfileLeft
