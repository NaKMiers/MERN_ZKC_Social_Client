import { UilSetting } from '@iconscout/react-unicons'
import React, { useEffect, useState } from 'react'
import { useSelector } from 'react-redux'
import { Link } from 'react-router-dom'
import Conversation from '../../components/Conversation'
import LogoSearch from '../../components/LogoSearch'
import Comment from '../../imgs/comment.png'
import Home from '../../imgs/home.png'
import Noti from '../../imgs/noti.png'
import styles from './ChatPage.module.scss'
import chatApi from '../../apis/chatRequest'
import ChatBox from '../../components/ChatBox'
import { io } from 'socket.io-client'
import { useRef } from 'react'

function ChatPage() {
   const { user } = useSelector(state => state.authReducer.authData)
   const socket = useRef()

   const [chats, setChats] = useState([])
   const [onlineUsers, setOnlineUsers] = useState([])
   const [curChat, setCurChat] = useState(null)
   const [sendMessage, setSendMessage] = useState(null)
   const [receivedMessage, setReceivedMessage] = useState(null)

   console.log('onlineUsers: ', onlineUsers)

   useEffect(() => {
      const getChats = async () => {
         try {
            const { data } = await chatApi.userChats(user._id)
            setChats(data)
         } catch (err) {
            console.log(err)
         }
      }
      getChats()
   }, [user._id])

   // connect to socket.io
   useEffect(() => {
      socket.current = io('http://localhost:3002')
      socket.current.emit('new-user-add', user._id)
      socket.current.on('get-users', users => {
         setOnlineUsers(users)
      })
   }, [user._id])

   // send messgae to socket.io
   useEffect(() => {
      if (sendMessage !== null) {
         socket.current.emit('send-message', sendMessage)
      }
   }, [sendMessage])

   // receive message from socket.io
   useEffect(() => {
      socket.current.on('receive-message', data => {
         console.log('data receive-message: ', data)
         setReceivedMessage(data)
      })
   }, [])

   const checkOnlineStatus = chat => {
      const chatMember = chat?.members.find(id => id !== user._id)
      const online = onlineUsers.some(user => user.userId === chatMember)
      return online
   }

   return (
      <div className={styles.chatPage}>
         {/* Left Side */}
         <div className={styles.leftSideChat}>
            <LogoSearch />
            <div className={styles.chatContainer}>
               <h2>Chats</h2>
               <div className={styles.chatList}>
                  {chats.map(chat => (
                     <div key={chat._id} onClick={() => setCurChat(chat)}>
                        <Conversation
                           data={chat}
                           curUserId={user._id}
                           online={checkOnlineStatus(chat)}
                        />
                     </div>
                  ))}
               </div>
            </div>
         </div>

         {/* Right Side */}
         <div className={styles.rightSideChat}>
            {/* NavIcons */}
            <div style={{ width: '20rem', alignSelf: 'flex-end' }}>
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
            </div>

            {/* Chat Body */}
            <ChatBox
               chat={curChat}
               curUserId={user._id}
               setSendMessage={setSendMessage}
               receivedMessage={receivedMessage}
               online={checkOnlineStatus(curChat)}
            />
         </div>
      </div>
   )
}

export default ChatPage
