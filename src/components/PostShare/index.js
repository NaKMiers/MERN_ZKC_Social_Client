import React from 'react'
import styles from './PostShare.module.scss'
import ProfileImg from '../../imgs/profileImg.jpg'
import { UilScenery } from '@iconscout/react-unicons'
import { UilPlayCircle } from '@iconscout/react-unicons'
import { UilLocationPoint } from '@iconscout/react-unicons'
import { UilSchedule } from '@iconscout/react-unicons'
import { UilTimes } from '@iconscout/react-unicons'
import { useState } from 'react'
import { useRef } from 'react'

function PostShare() {
   const [image, setImage] = useState(null)
   console.log(image)
   const imageRef = useRef()

   const onImageChange = e => {
      if (e.target.files && e.target.files[0]) {
         let img = e.target.files[0]
         setImage(URL.createObjectURL(img))
      }
   }

   const onRemoveImage = () => {
      URL.revokeObjectURL(image)
      setImage(null)
   }

   return (
      <div className={styles.postShare}>
         <img src={ProfileImg} alt='avatar' />

         <div className={styles.contentWrap}>
            <input type='text' placeholder="What's happening?" />
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
               <button className={`${styles.psBtn} button`}>Share</button>
               <div style={{ display: 'none' }}>
                  <input type='file' name='myImage' ref={imageRef} onChange={onImageChange} />
               </div>
            </div>
            {image && (
               <div className={styles.previewImg}>
                  <UilTimes onClick={onRemoveImage} />
                  <img src={image} alt='empty' />
               </div>
            )}
         </div>
      </div>
   )
}

export default PostShare
