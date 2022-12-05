import React from 'react'
import {UilSearch} from '@iconscout/react-unicons'
import Logo from '../../imgs/logo.png'
import styles from './LogoSearch.module.scss'

function LogoSearch() {
   return (
      <div className={styles.logoSearch}>
         <img src={Logo} alt='logo' />
         <div className={styles.search}>
            <input type='text' placeholder='#Explore' />
            <div className={styles.sIcon}>
               <UilSearch />
            </div>
         </div>
      </div>
   )
}

export default LogoSearch
