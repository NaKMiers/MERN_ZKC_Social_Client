import React from 'react'
import styles from './ProfileCard.module.scss'
import Cover from '../../imgs/cover.jpg'
import Profile from '../../imgs/profileImg.jpg'

function ProfileCard() {
   const ProfilePage = true

   return (
      <div className={styles.profileCard}>
         <div className={styles.profileImages}>
            <img src={Cover} alt='cover' />
            <img src={Profile} alt='profile' />
         </div>

         <div className={styles.profileName}>
            <span>Zendaya Mj</span>
            <span>Senior UI/UX Designer</span>
         </div>

         <div className={styles.followStatus}>
            <hr />
            <div className={styles.contentWrap}>
               <div className={styles.follow}>
                  <span>6.890</span>
                  <span>Followers</span>
               </div>
               <div className={styles.vl}></div>
               <div className={styles.follow}>
                  <span>1</span>
                  <span>Followings</span>
               </div>

               {ProfilePage && (
                  <>
                     <div className={styles.vl}></div>
                     <div className={styles.follow}>
                        <span>3</span>
                        <span>Posts</span>
                     </div>
                  </>
               )}
            </div>
            <hr />
         </div>
         {ProfilePage ? '' : <span>My Profile</span>}
      </div>
   )
}

export default ProfileCard
