import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import styles from './AuthPage.module.scss'
import Logo from '../../imgs/logo.png'
import authAction from '../../actions/authAction'

function AuthPage() {
   const dispatch = useDispatch()
   const loading = useSelector(state => state.authReducer.loading)
   const [isSignUp, setSignUp] = useState(true)
   const [confirmPassword, setConfirmPassword] = useState(true)
   const [data, setData] = useState({
      firstName: '',
      lastName: '',
      username: '',
      password: '',
      confirmPassword: '',
   })

   const handleChange = e => setData({ ...data, [e.target.name]: e.target.value })
   const handleSubmit = e => {
      e.preventDefault()

      if (!isSignUp) {
         data.password === data.confirmPassword
            ? dispatch(authAction.signUp(data))
            : setConfirmPassword(false)
      } else {
         dispatch(authAction.login(data))
      }
   }
   const resetForm = () => {
      setConfirmPassword(true)
      setData({
         firstName: '',
         lastName: '',
         username: '',
         password: '',
         confirmPassword: '',
      })
      setSignUp(prev => !prev)
   }

   return (
      <div className={styles.authPage}>
         {/* Left */}
         <div className={styles.authLeft}>
            <img src={Logo} alt='logo' />
            <div className={styles.webname}>
               <h1>ZKC Media</h1>
               <h6>Explore the ideas throughout the world</h6>
            </div>
         </div>

         {/* Right */}
         <div className={styles.authRight}>
            <form className={`${styles.infoForm} ${styles.authForm}`} onSubmit={handleSubmit}>
               <h3>{!isSignUp ? 'Sign up' : 'Login'}</h3>

               {!isSignUp && (
                  <div>
                     <input
                        name='firstName'
                        className={styles.infoInput}
                        type='text'
                        placeholder='First Name'
                        value={data.firstName}
                        onChange={handleChange}
                     />

                     <input
                        name='lastName'
                        className={styles.infoInput}
                        type='text'
                        placeholder='Last Name'
                        value={data.lastName}
                        onChange={handleChange}
                     />
                  </div>
               )}

               <div>
                  <input
                     name='username'
                     className={styles.infoInput}
                     type='text'
                     placeholder='Username'
                     value={data.username}
                     onChange={handleChange}
                  />
               </div>
               <div>
                  <input
                     name='password'
                     className={styles.infoInput}
                     type='password'
                     placeholder='Password'
                     value={data.password}
                     onChange={handleChange}
                  />
                  {!isSignUp && (
                     <input
                        name='confirmPassword'
                        className={styles.infoInput}
                        type='password'
                        placeholder='Conform Password'
                        value={data.confirmPassword}
                        onChange={handleChange}
                     />
                  )}
               </div>
               {!confirmPassword && (
                  <span
                     style={{
                        color: '#f44336',
                        fontSize: '12px',
                        alignSelf: 'flex-end',
                     }}
                  >
                     * Confirm password is not same
                  </span>
               )}
               <div>
                  <span
                     style={{ fontSize: '12px', cursor: 'pointer' }}
                     onClick={() => resetForm()}
                  >
                     {!isSignUp
                        ? 'Already have an account. Login'
                        : "Don't have an account. Sign up"}
                  </span>
               </div>
               <button className={`${styles.infoBtn} button`} disabled={loading}>
                  {loading ? 'Loading...' : !isSignUp ? 'Sign up' : 'Login'}
               </button>
            </form>
         </div>
      </div>
   )
}

export default AuthPage
