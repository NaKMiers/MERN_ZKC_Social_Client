import { Modal, useMantineTheme } from '@mantine/core'
import React, { useState } from 'react'
import { useDispatch } from 'react-redux'
import { useParams } from 'react-router-dom'
import uploadAction from '../../actions/uploadAction'
import userAction from '../../actions/userAction'
import styles from './ProfileModal.module.scss'

function ProfileModal({ opened, setModalOpened, data }) {
   const theme = useMantineTheme()
   const [formData, setFormData] = useState({
      ...data,
      liveIn: data.liveIn || '',
      country: data.country || '',
      workAt: data.workAt || '',
      relationship: data.relationship || '',
   })
   const [profileImage, setProfileImage] = useState(null)
   const [coverImage, setCoverImage] = useState(null)
   const dispatch = useDispatch()
   const params = useParams()

   const handleChange = e => {
      setFormData({ ...formData, [e.target.name]: e.target.value })
   }

   const onImageChange = e => {
      if (e.target.files && e.target.files[0]) {
         let img = e.target.files[0]
         e.target.name === 'profileImg' ? setProfileImage(img) : setCoverImage(img)
      }
   }

   const handleSubmit = e => {
      e.preventDefault()

      let userData = formData
      if (profileImage) {
         const data = new FormData()
         let filename = Date.now() + profileImage.name
         data.append('name', filename)
         data.append('file', profileImage)
         userData.profileImg = filename
         try {
            dispatch(uploadAction.uploadImage(data))
         } catch (err) {
            console.log(err)
         }
      }
      if (profileImage) {
         const data = new FormData()
         let filename = Date.now() + profileImage.name
         data.append('name', filename)
         data.append('file', coverImage)
         userData.coverImg = filename
         try {
            dispatch(uploadAction.uploadImage(data))
         } catch (err) {
            console.log(err)
         }
      }
      dispatch(userAction.updateUser(params.id, userData))
      setModalOpened(false)
   }

   return (
      <Modal
         overlayColor={theme.colorScheme === 'dark' ? theme.colors.dark[9] : theme.colors.gray[2]}
         overlayOpacity={0.55}
         overlayBlur={3}
         size='55%'
         opened={opened}
         onClose={() => setModalOpened(false)}
      >
         <form className={styles.infoForm}>
            <h3>Your info</h3>

            <div>
               <input
                  className={styles.infoInput}
                  name='firstName'
                  type='text'
                  placeholder='First Name'
                  value={formData.firstName}
                  onChange={handleChange}
               />
               <input
                  className={styles.infoInput}
                  name='lastName'
                  type='text'
                  placeholder='Last Name'
                  value={formData.lastName}
                  onChange={handleChange}
               />
            </div>

            <div>
               <input
                  className={styles.infoInput}
                  name='workAt'
                  type='text'
                  placeholder='Work At'
                  value={formData.workAt}
                  onChange={handleChange}
               />
            </div>

            <div>
               <input
                  className={styles.infoInput}
                  name='liveIn'
                  type='text'
                  placeholder='Live In'
                  value={formData.liveIn}
                  onChange={handleChange}
               />
               <input
                  className={styles.infoInput}
                  name='country'
                  type='text'
                  placeholder='Country'
                  value={formData.country}
                  onChange={handleChange}
               />
            </div>

            <div>
               <input
                  className={styles.infoInput}
                  name='relationship'
                  type='text'
                  placeholder='Relationship Status'
                  value={formData.relationship}
                  onChange={handleChange}
               />
            </div>

            <div>
               Profile Image
               <input name='profileImg' type='file' onChange={onImageChange} />
               Cover Image
               <input name='coverImg' type='file' onChange={onImageChange} />
            </div>

            <button className={`${styles.infoBtn} button`} onClick={handleSubmit}>
               Update
            </button>
         </form>
      </Modal>
   )
}

export default ProfileModal
