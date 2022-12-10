import React, {useEffect, useState} from 'react'
import {format} from 'timeago.js'
import InputEmoji from 'react-input-emoji'
import messageApi from '../../apis/messageRequest'
import userApi from '../../apis/userRequest'
import styles from './ChatBox.module.scss'

function ChatBox({chat, curUserId}) {
   const [userData, serUserData] = useState(null)
   const [messages, setMessages] = useState([])
   const [newMessage, setNewMessage] = useState('')
   const serverPublic = process.env.REACT_APP_PUBLIC_FOLDER

   console.log('newMessage: ', newMessage)

   useEffect(() => {
      const userId = chat?.members.find(id => id !== curUserId)
      const getUserData = async () => {
         try {
            const {data} = await userApi.getUser(userId)
            serUserData(data)
         } catch (err) {
            console.log(err)
         }
      }
      if (chat !== null) getUserData()
   }, [chat, curUserId])

   useEffect(() => {
      const fetchMessages = async () => {
         try {
            const {data} = await messageApi.getMessages(chat._id)
            setMessages(data)
         } catch (err) {
            console.log(err)
         }
      }
      if (chat !== null) fetchMessages()
   }, [chat])

   const handleChange = newMessage => {
      setNewMessage(newMessage)
   }

   const hanleSend = () => {}

   return (
      <>
         <div className={styles.chatBoxContainer}>
            {chat ? (
               <>
                  <div className={styles.chatHeader}>
                     <div className={styles.follower}>
                        <div className={styles.contentWrap}>
                           <div className={styles.onlineDot}></div>
                           <img
                              src={
                                 serverPublic + (userData?.profileImg || 'defaultProfileImg.png')
                              }
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
                  </div>

                  {/* Chatbox Messages */}
                  <div className={styles.chatBody}>
                     {messages.map(message => (
                        <div key={message._id}>
                           <div
                              className={`${styles.message} ${
                                 message.senderId === curUserId && styles.own
                              }`}
                           >
                              <span>{message.text}</span>
                              <span>{format(message.createdAt)}</span>
                           </div>
                        </div>
                     ))}
                  </div>

                  {/* Chat Sender */}
                  <div className={styles.chatSender}>
                     <div>+</div>
                     <InputEmoji value={newMessage} onChange={handleChange} />
                     <div className={`${styles.sendBtn} button`} onChange={hanleSend}>
                        Send
                     </div>
                  </div>
               </>
            ) : (
               <span className={styles.chatboxEmptyMessage}>
                  Tap on a Chat to start Conversation
               </span>
            )}
         </div>
      </>
   )
}

export default ChatBox
