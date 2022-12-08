import React, { useState } from 'react'
import { useSelector } from 'react-redux'
import styles from './Post.module.scss'
import Comment from '../../imgs/comment.png'
import Share from '../../imgs/share.png'
import Like from '../../imgs/like.png'
import NotLike from '../../imgs/notlike.png'
import postRequest from '../../apis/postRequest'

function Post({ data }) {
   const { user } = useSelector(state => state.authReducer.authData)
   const [liked, setLiked] = useState(data.likes.includes(user._id))
   const [likes, setLikes] = useState(data.likes.length)

   const serverPublic = process.env.REACT_APP_PUBLIC_FOLDER

   const handleLike = () => {
      setLiked(!liked)
      setLikes(liked ? likes - 1 : likes + 1)
      postRequest.likePost(data._id, user._id)
   }

   return (
      <div className={styles.post}>
         <img src={data?.image ? serverPublic + data?.image : ''} alt='post' />

         <div className={styles.postReact}>
            <img
               src={liked ? Like : NotLike}
               alt='like'
               style={{ cursor: 'pointer' }}
               onClick={handleLike}
            />
            <img src={Comment} alt='comment' />
            <img src={Share} alt='share' />
         </div>

         <span style={{ color: 'var(--gray)', fontSize: 12 }}>{likes} likes</span>

         <div className={styles.detail}>
            <span>
               <b>{data.name}</b>
            </span>
            <span> {data.desc}</span>
         </div>
      </div>
   )
}

export default Post
