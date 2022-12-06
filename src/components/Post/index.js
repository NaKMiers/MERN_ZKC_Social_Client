import React from 'react'
import styles from './Post.module.scss'
import Comment from '../../imgs/comment.png'
import Share from '../../imgs/share.png'
import Like from '../../imgs/like.png'
import NotLike from '../../imgs/notlike.png'

function Post({ data, id }) {
   return (
      <div className={styles.post}>
         <img src={data.img} alt='post' />

         <div className={styles.postReact}>
            <img src={data.liked ? Like : NotLike} alt='like' />
            <img src={Comment} alt='comment' />
            <img src={Share} alt='share' />
         </div>

         <span style={{ color: 'var(--gray)', fontSize: 12 }}>{data.likes} likes</span>

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
