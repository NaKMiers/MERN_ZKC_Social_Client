import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import styles from './Posts.module.scss'
import Post from '../Post'
import postAction from '../../actions/postAction'

function Posts() {
   const dispatch = useDispatch()
   const { user } = useSelector(state => state.authReducer.authData)
   const { posts, loading } = useSelector(state => state.postReducer)

   useEffect(() => {
      dispatch(postAction.getTimeLinePosts(user._id))
   }, [dispatch, user._id])

   return (
      <div className={styles.posts}>
         {loading
            ? 'Fetching Posts...'
            : posts.map((post, index) => <Post key={index} data={post} />)}
      </div>
   )
}

export default Posts
