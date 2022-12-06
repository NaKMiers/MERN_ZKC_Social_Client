import { Modal, useMantineTheme } from '@mantine/core'
import React from 'react'
import styles from './ProfileModal.module.scss'

function ProfileModal({ opened, setModalOpened }) {
   const theme = useMantineTheme()
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
               />
               <input
                  className={styles.infoInput}
                  name='lastName'
                  type='text'
                  placeholder='Last Name'
               />
            </div>

            <div>
               <input
                  className={styles.infoInput}
                  name='workAt'
                  type='text'
                  placeholder='Work At'
               />
            </div>

            <div>
               <input
                  className={styles.infoInput}
                  name='liveIn'
                  type='text'
                  placeholder='Live In'
               />
               <input
                  className={styles.infoInput}
                  name='country'
                  type='text'
                  placeholder='Country'
               />
            </div>

            <div>
               <input
                  className={styles.infoInput}
                  name='relationshipStatus'
                  type='text'
                  placeholder='Relationship Status'
               />
            </div>

            <div>
               Profile Image
               <input name='profileImg' type='file' />
               Cover Image
               <input name='coverImage' type='file' />
            </div>

            <button className={`${styles.infoBtn} button`}>Update</button>
         </form>
      </Modal>
   )
}

export default ProfileModal
