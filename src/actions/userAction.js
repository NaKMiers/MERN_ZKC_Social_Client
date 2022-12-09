import userApi from '../apis/userRequest'

const userAction = {
   updateUser: (id, data) => async dispatch => {
      dispatch({ type: 'UPDATE_START' })
      try {
         const res = await userApi.updateUser(id, data)
         dispatch({ type: 'UPDATE_SUCCESS', payload: res.data })
      } catch (err) {
         console.log(err)
         dispatch({ type: 'UPDATE_FAIL' })
      }
   },

   followUser: (id, data) => async dispatch => {
      dispatch({ type: 'FOLLOW_USER', payload: id })
      try {
         await userApi.followUser(id, data)
      } catch (err) {
         console.log(err)
      }
   },

   unFollowUser: (id, data) => async dispatch => {
      dispatch({ type: 'UNFOLLOW_USER', payload: id })
      try {
         await userApi.unFollowUser(id, data)
      } catch (err) {
         console.log(err)
      }
   },
}

export default userAction
