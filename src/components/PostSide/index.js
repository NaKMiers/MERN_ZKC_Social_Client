import React from 'react'
import styles from './PostSide.module.scss'
import PostShare from '../PostShare'

function PostSide() {
   return (
      <div className={styles.postSide}>
         <PostShare />
      </div>
   )
}

export default PostSide
