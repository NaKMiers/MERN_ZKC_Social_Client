import React from 'react'
import styles from './PostSide.module.scss'
import PostShare from '../PostShare'
import Posts from '../Posts'

function PostSide() {
   return (
      <div className={styles.postSide}>
         <PostShare />
         <Posts />
      </div>
   )
}

export default PostSide
