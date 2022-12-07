import React, { useState } from 'react'
import { UilPen } from '@iconscout/react-unicons'
import styles from './InfoCard.module.scss'
import ProfileModal from '../ProfileModal'

function InfoCard() {
   const [modalOpened, setModalOpened] = useState(false)

   return (
      <div className={styles.infoCard}>
         <div className={styles.infoHead}>
            <h4>Your Info</h4>
            <div>
               <UilPen width='2rem' height='1.2rem' onClick={() => setModalOpened(true)} />
               <ProfileModal opened={modalOpened} setModalOpened={setModalOpened} />
            </div>
         </div>

         <div className={styles.info}>
            <span>
               <b>Status</b>
            </span>
            <span> In Relationship</span>
         </div>

         <div className={styles.info}>
            <span>
               <b>Live in</b>
            </span>
            <span> Ho Chi Minh City</span>
         </div>

         <div className={styles.info}>
            <span>
               <b>Works at</b>
            </span>
            <span> Upwork & Fiverr</span>
         </div>

         <button className={`${styles.logoutBtn} button`}>Logout</button>
      </div>
   )
}

export default InfoCard
