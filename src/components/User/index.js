import React, {useState} from 'react'
import {useDispatch, useSelector} from 'react-redux'
import userAction from '../../actions/userAction'
import styles from './User.module.scss'

function User({person}) {
   const dispatch = useDispatch()
   const {user} = useSelector(state => state.authReducer.authData)
   const [following, setFollowing] = useState(person.followers.includes(user._id))
   const serverPublic = process.env.REACT_APP_PUBLIC_FOLDER

   const handleFollow = () => {
      dispatch(
         following
            ? userAction.unFollowUser(person._id, user)
            : userAction.followUser(person._id, user)
      )
      setFollowing(!following)
   }

   return (
      <div className={styles.follower}>
         <div className={styles.contentWrap}>
            <img
               className={styles.followerImg}
               src={serverPublic + (person.profileImg || 'defaultProfileImg.png')}
               alt='avatar'
            />
            <div className={styles.name}>
               <span>{person.firstName}</span>
               <span>@{person.username}</span>
            </div>
         </div>

         <button
            className={` ${styles.fcBtn} ${following ? styles.unFollowBtn : ''} button`}
            onClick={handleFollow}
         >
            {following ? 'Unfollow' : 'Follow'}
         </button>
      </div>
   )
}

export default User
