import React, {useEffect, useState} from 'react'
import styles from './Conversation.module.scss'
import userApi from '../../apis/userRequest'

function Conversation({data, curUserId}) {
   const [userData, serUserData] = useState(null)
   const serverPublic = process.env.REACT_APP_PUBLIC_FOLDER

   useEffect(() => {
      const userId = data.members.find(id => id !== curUserId)

      const getUserData = async () => {
         try {
            const {data} = await userApi.getUser(userId)
            serUserData(data)
         } catch (err) {
            console.log(err)
         }
      }
      getUserData()
   }, [curUserId, data.members])

   return (
      <>
         <div className={`${styles.follower} ${styles.conversation}`}>
            <div className={styles.contentWrap}>
               <div className={styles.onlineDot}></div>
               <img
                  src={serverPublic + (userData?.profileImg || 'defaultProfileImg.png')}
                  alt='avatar'
                  className={styles.followerImg}
                  style={{width: '50px', height: '50px'}}
               />
               <div className={styles.name} style={{fontSize: '0.8rem'}}>
                  <span>
                     {userData?.firstName} {userData?.lastName}
                  </span>
                  <span>Online</span>
               </div>
            </div>
         </div>
         <hr style={{width: '85%', border: '0.1px solid #ececec'}} />
      </>
   )
}

export default Conversation
