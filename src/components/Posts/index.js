import React from 'react'
import styles from './Posts.module.scss'
import { posts } from '../../Data'
import Post from '../Post'

function Posts() {
   return (
      <div className={styles.posts}>
         {posts.map((post, index) => (
            <Post key={index} data={post} id={index} />
         ))}
      </div>
   )
}

export default Posts
