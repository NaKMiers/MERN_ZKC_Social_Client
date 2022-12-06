import React from 'react'
import styles from './AuthPage.module.scss'
import Logo from '../../imgs/logo.png'
import SignUpForm from '../../SignUpForm'
// import LoginForm from '../../LoginForm'

function AuthPage() {
   return (
      <div className={styles.authPage}>
         <div className={styles.authLeft}>
            <img src={Logo} alt='logo' />
            <div className={styles.webname}>
               <h1>ZKC Media</h1>
               <h6>Explore the ideas throughout the world</h6>
            </div>
         </div>

         <SignUpForm />
      </div>
   )
}

export default AuthPage
