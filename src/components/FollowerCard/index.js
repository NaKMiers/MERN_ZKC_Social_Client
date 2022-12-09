import React, { useEffect, useState } from 'react'
import styles from './FollowerCard.module.scss'
import User from '../User'
import { useSelector } from 'react-redux'
import userApi from '../../apis/userRequest'

function FollowerCard() {
   const [persons, setPersons] = useState([])
   const { user } = useSelector(state => state.authReducer.authData)
   console.log('user: ', user)
   console.log('persons: ', persons)

   useEffect(() => {
      const fetchPersons = async () => {
         const { data } = await userApi.getAllUser()
         setPersons(data.filter(person => person._id !== user._id))
      }
      fetchPersons()
   }, [user._id])

   return (
      <div className={styles.followerCard}>
         <h3>People you may know</h3>

         {persons.map((person, index) => (
            <User key={index} person={person} />
         ))}
      </div>
   )
}

export default FollowerCard
