import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import styles from './Posts.module.scss'
import Post from '../Post'
import postAction from '../../actions/postAction'
import { useParams } from 'react-router-dom'

function Posts() {
   const dispatch = useDispatch()
   const params = useParams()
   const { user } = useSelector(state => state.authReducer.authData)
   let { posts, loading } = useSelector(state => state.postReducer)

   useEffect(() => {
      dispatch(postAction.getTimeLinePosts(user._id))
   }, [dispatch, user._id])

   if (!posts) return 'No posts.'
   if (params.id) posts = posts.filter(post => post.userId === params.id)

   return (
      <div className={styles.posts}>
         {loading
            ? 'Fetching Posts...'
            : posts.map((post, index) => <Post key={index} data={post} />)}
      </div>
   )
}

export default Posts
