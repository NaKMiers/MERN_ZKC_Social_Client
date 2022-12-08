import React from 'react'
import { UilScenery } from '@iconscout/react-unicons'
import { UilPlayCircle } from '@iconscout/react-unicons'
import { UilLocationPoint } from '@iconscout/react-unicons'
import { UilSchedule } from '@iconscout/react-unicons'
import { UilTimes } from '@iconscout/react-unicons'
import { useState } from 'react'
import { useRef } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import styles from './PostShare.module.scss'
import uploadAction from '../../actions/uploadAction'

function PostShare() {
   const loading = useSelector(state => state.postReducer.uploading)
   const error = useSelector(state => state.postReducer.error)
   const { user } = useSelector(state => state.authReducer.authData)
   const [image, setImage] = useState(null)
   const [imagePreview, setImagePreview] = useState('')
   const imageRef = useRef()
   const descRef = useRef()
   const serverPublic = process.env.REACT_APP_PUBLIC_FOLDER
   const dispatch = useDispatch()

   const onImageChange = e => {
      if (e.target.files && e.target.files[0]) {
         let img = e.target.files[0]
         setImage(img)
         setImagePreview(URL.createObjectURL(img))
      }
   }

   const onRemoveImage = () => {
      URL.revokeObjectURL(imagePreview)
      setImage(null)
      setImagePreview('')
   }

   const reset = () => {
      onRemoveImage()
      descRef.current.value = ''
   }

   const handleSubmit = e => {
      e.preventDefault()
      const newPost = {
         userId: user._id,
         desc: descRef.current.value,
      }
      if (image) {
         const data = new FormData()
         const filename = Date.now() + image.name
         data.append('name', filename)
         data.append('file', image)
         newPost.image = filename

         try {
            dispatch(uploadAction.uploadImage(data))
         } catch (err) {
            console.log(err)
         }
      }
      dispatch(uploadAction.uploadPost(newPost))
      if (!error) reset()
   }

   return (
      <div className={styles.postShare}>
         <img
            src={
               user.profileImg
                  ? serverPublic + user.profileImg
                  : serverPublic + 'defaultProfileImg.png'
            }
            alt='avatar'
         />

         <div className={styles.contentWrap}>
            <input type='text' placeholder="What's happening?" ref={descRef} required />
            <div className={styles.postOptions}>
               <div
                  className={styles.option}
                  style={{ color: 'var(--photo)' }}
                  onClick={() => imageRef.current.click()}
               >
                  <UilScenery />
                  Photo
               </div>
               <div className={styles.option} style={{ color: 'var(--video)' }}>
                  <UilPlayCircle />
                  Video
               </div>
               <div className={styles.option} style={{ color: 'var(--location)' }}>
                  <UilLocationPoint />
                  Location
               </div>
               <div className={styles.option} style={{ color: 'var(--schedule)' }}>
                  <UilSchedule />
                  Schedule
               </div>
               <button
                  className={`${styles.psBtn} button`}
                  onClick={handleSubmit}
                  disabled={loading}
               >
                  {loading ? 'Uploading...' : 'Share'}
               </button>
               <div style={{ display: 'none' }}>
                  <input type='file' name='myImage' ref={imageRef} onChange={onImageChange} />
               </div>
            </div>
            {imagePreview && (
               <div className={styles.previewImg}>
                  <UilTimes onClick={onRemoveImage} />
                  <img src={imagePreview} alt='empty' />
               </div>
            )}
         </div>
      </div>
   )
}

export default PostShare
