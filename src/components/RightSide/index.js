import React, {useState} from 'react'
import Home from '../../imgs/home.png'
import Noti from '../../imgs/noti.png'
import Comment from '../../imgs/comment.png'
import {UilSetting} from '@iconscout/react-unicons'
import styles from './RightSide.module.scss'
import TrendCard from '../TrendCard'
import ShareModal from '../ShareModal'
import {Link} from 'react-router-dom'

function RightSide() {
   const [modalOpened, setModalOpened] = useState(false)

   return (
      <div className={styles.rightSide}>
         <div className={styles.navIcons}>
            <Link to='/'>
               <img src={Home} alt='home-icon' />
            </Link>
            <UilSetting />
            <img src={Noti} alt='noti-icon' />
            <Link to='/chat'>
               <img src={Comment} alt='comment-icon' />
            </Link>
         </div>

         <TrendCard />

         <button className={`${styles.rBtn} button`} onClick={() => setModalOpened(true)}>
            Share
         </button>
         <ShareModal opened={modalOpened} setModalOpened={setModalOpened} />
      </div>
   )
}

export default RightSide
