import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useParams } from 'react-router-dom'
import { UilPen } from '@iconscout/react-unicons'
import styles from './InfoCard.module.scss'
import ProfileModal from '../ProfileModal'
import userApi from '../../apis/userRequest'
import authAction from '../../actions/authAction'

function InfoCard() {
   console.log('InfoCard')
   const [modalOpened, setModalOpened] = useState(false)
   const [profileUser, setProfileUser] = useState({})
   const dispatch = useDispatch()
   const params = useParams()
   const profileUserId = params.id

   const { user } = useSelector(state => state.authReducer.authData)

   const handleLogout = () => {
      dispatch(authAction.logout())
   }

   useEffect(() => {
      const fetchProfileUser = async () => {
         if (profileUserId === user._id) {
            setProfileUser(user)
         } else {
            const { data: profileUser } = await userApi.getUser(profileUserId)
            setProfileUser(profileUser)
         }
      }
      fetchProfileUser()
   }, [profileUserId, user])

   return (
      <div className={styles.infoCard}>
         <div className={styles.infoHead}>
            <h4>Profile Info</h4>
            {user._id === profileUserId && (
               <div>
                  <UilPen width='2rem' height='1.2rem' onClick={() => setModalOpened(true)} />
                  <ProfileModal opened={modalOpened} setModalOpened={setModalOpened} data={user} />
               </div>
            )}
         </div>

         <div className={styles.info}>
            <span>
               <b>Status</b>
            </span>
            <span> {profileUser.relationship}</span>
         </div>

         <div className={styles.info}>
            <span>
               <b>Live in</b>
            </span>
            <span> {profileUser.liveIn}</span>
         </div>

         <div className={styles.info}>
            <span>
               <b>Works at</b>
            </span>
            <span> {profileUser.workAt}</span>
         </div>

         <button className={`${styles.logoutBtn} button`} onClick={handleLogout}>
            Logout
         </button>
      </div>
   )
}

export default InfoCard
