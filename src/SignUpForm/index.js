import React from 'react'
import styles from './SignUpForm.module.scss'

function SignUpForm() {
   return (
      <div className={styles.authRight}>
         <form className={`${styles.infoForm} ${styles.authForm}`}>
            <h3>Sign up</h3>

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
                  type='text'
                  className={styles.infoInput}
                  name='username'
                  placeholder='Username'
               />
            </div>
            <div>
               <input
                  type='password'
                  className={styles.infoInput}
                  name='password'
                  placeholder='Password'
               />
               <input
                  type='password'
                  className={styles.infoInput}
                  name='confirmPassword'
                  placeholder='Conform Password'
               />
            </div>

            <div style={{ fontSize: '12px' }}>Already have an account. Login</div>
            <button className={`${styles.infoBtn} button`}>Sign up</button>
         </form>
      </div>
   )
}

export default SignUpForm
