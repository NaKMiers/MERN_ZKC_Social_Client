import React from 'react'
import { Modal, useMantineTheme } from '@mantine/core'
// import styles from './ShareModal.module.scss'
import PostShare from '../PostShare'

function ShareModal({ opened, setModalOpened }) {
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
         <PostShare />
      </Modal>
   )
}

export default ShareModal
