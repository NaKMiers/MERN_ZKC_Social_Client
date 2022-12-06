import React from 'react'
import styles from './LoginForm.module.scss'

function LogInForm() {
   return (
      <div className={styles.authRight}>
         <form className={`${styles.infoForm} ${styles.authForm}`}>
            <h3>Log In</h3>

            <div>
               <input
                  className={styles.infoInput}
                  name='username'
                  type='text'
                  placeholder='Username'
               />
            </div>

            <div>
               <input
                  className={styles.infoInput}
                  type='password'
                  placeholder='Password'
                  name='password'
               />
            </div>

            <div>
               <span style={{ fontSize: '12px' }}>Don't have an account. Sign up</span>
               <button className={`${styles.infoBtn} button`}>Login</button>
            </div>
         </form>
      </div>
   )
}

export default LogInForm
