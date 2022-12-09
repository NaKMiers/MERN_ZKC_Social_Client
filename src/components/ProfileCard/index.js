import React from 'react'
import { useSelector } from 'react-redux'
import { Link } from 'react-router-dom'
import styles from './ProfileCard.module.scss'

function ProfileCard({ location }) {
   const { user } = useSelector(state => state.authReducer.authData)
   const { posts } = useSelector(state => state.postReducer)
   const serverPublic = process.env.REACT_APP_PUBLIC_FOLDER
   const ProfilePage = location === 'profilePage'

   return (
      <div className={styles.profileCard}>
         <div className={styles.profileImages}>
            <img
               src={
                  user.coverImg
                     ? serverPublic + user.coverImg
                     : serverPublic + 'defaultCoverImg.png'
               }
               alt='cover'
            />
            <img
               src={
                  user.profileImg
                     ? serverPublic + user.profileImg
                     : serverPublic + 'defaultProfileImg.png'
               }
               alt='profile'
            />
         </div>

         <div className={styles.profileName}>
            <span>
               {user.firstName} {user.lastName}
            </span>
            <span>{user.workAt || 'Write about yourself'}</span>
         </div>

         <div className={styles.followStatus}>
            <hr />
            <div className={styles.contentWrap}>
               <div className={styles.follow}>
                  <span>{user.followers.length}</span>
                  <span>Followers</span>
               </div>
               <div className={styles.vl}></div>
               <div className={styles.follow}>
                  <span>{user.followings.length}</span>
                  <span>Followings</span>
               </div>

               {ProfilePage && (
                  <>
                     <div className={styles.vl}></div>
                     <div className={styles.follow}>
                        <span>{posts.filter(post => post.userId === user._id).length}</span>
                        <span>Posts</span>
                     </div>
                  </>
               )}
            </div>
            <hr />
         </div>
         {ProfilePage ? (
            ''
         ) : (
            <span>
               <Link
                  to={'/profile/' + user._id}
                  style={{ textDecoration: 'none', color: 'inherit' }}
               >
                  My Profile
               </Link>
            </span>
         )}
      </div>
   )
}

export default ProfileCard
