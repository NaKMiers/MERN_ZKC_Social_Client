import React, { useEffect, useState } from 'react'
import { format } from 'timeago.js'
import InputEmoji from 'react-input-emoji'
import messageApi from '../../apis/messageRequest'
import userApi from '../../apis/userRequest'
import styles from './ChatBox.module.scss'
import { useRef } from 'react'

function ChatBox({ chat, curUserId, setSendMessage, receivedMessage, online }) {
   const [userData, serUserData] = useState(null)
   const [messages, setMessages] = useState([])
   const [newMessage, setNewMessage] = useState('')
   const scrollRef = useRef()
   const serverPublic = process.env.REACT_APP_PUBLIC_FOLDER

   // scroll to bottom
   useEffect(() => {
      scrollRef.current?.scrollIntoView({ behavior: 'smooth' })
   }, [messages])

   // get user you are chatting
   useEffect(() => {
      const userId = chat?.members?.find(id => id !== curUserId)
      const getUserData = async () => {
         try {
            const { data } = await userApi.getUser(userId)
            serUserData(data)
         } catch (err) {
            console.log(err)
         }
      }
      if (chat !== null) getUserData()
   }, [chat, curUserId])

   // get all messages
   useEffect(() => {
      const fetchMessages = async () => {
         try {
            const { data } = await messageApi.getMessages(chat._id)
            setMessages(data)
         } catch (err) {
            console.log(err)
         }
      }
      if (chat !== null) fetchMessages()
   }, [chat])

   // receive message
   useEffect(() => {
      if (receivedMessage !== null && receivedMessage.chatId === chat._id) {
         setMessages(prev => [...prev, receivedMessage])
      }
   }, [receivedMessage, chat?._id])

   const handleChange = newMessage => {
      setNewMessage(newMessage)
   }

   const handleSend = async e => {
      e.preventDefault()
      const message = { senderId: curUserId, text: newMessage, chatId: chat._id }

      // send message to socket.io
      const receiverId = chat.members.find(id => id !== curUserId)
      setSendMessage({ ...message, receiverId })

      // send message to database
      try {
         const { data } = await messageApi.addMessage(message)
         setMessages([...messages, data])
         setNewMessage('')
      } catch (err) {
         console.log(err)
      }
   }

   return (
      <>
         <div className={styles.chatBoxContainer}>
            {chat ? (
               <>
                  {/* Chat Header */}
                  <div className={styles.chatHeader}>
                     <div className={styles.follower}>
                        <div className={styles.contentWrap}>
                           {online && <div className={styles.onlineDot}></div>}
                           <img
                              src={
                                 serverPublic + (userData?.profileImg || 'defaultProfileImg.png')
                              }
                              alt='avatar'
                              className={styles.followerImg}
                              style={{ width: '50px', height: '50px' }}
                           />
                           <div className={styles.name} style={{ fontSize: '0.8rem' }}>
                              <span>
                                 {userData?.firstName} {userData?.lastName}
                              </span>
                              <span>{online ? 'Online' : 'Offline'}</span>
                           </div>
                        </div>
                     </div>
                     <hr style={{ width: '85%', border: '0.1px solid #ececec' }} />
                  </div>

                  {/* Chatbox Body */}
                  <div className={styles.chatBody}>
                     {messages.map((message, index) => (
                        <div
                           key={index}
                           ref={scrollRef}
                           className={`${styles.message} ${
                              message.senderId === curUserId && styles.own
                           }`}
                        >
                           <span>{message.text}</span>
                           <span>{format(message.createdAt)}</span>
                        </div>
                     ))}
                  </div>

                  {/* Chat Sender */}
                  <div className={styles.chatSender}>
                     <div>+</div>
                     <InputEmoji value={newMessage} onChange={handleChange} />
                     <div className={`${styles.sendBtn} button`} onClick={handleSend}>
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
