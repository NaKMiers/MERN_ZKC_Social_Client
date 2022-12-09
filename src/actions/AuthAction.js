import authApi from '../apis/authRequest'

const authAction = {
   login: formData => async dispatch => {
      dispatch({ type: 'AUTH_START' })
      try {
         const { data } = await authApi.login(formData)
         console.log(data)
         dispatch({ type: 'AUTH_SUCCESS', payload: data })
      } catch (err) {
         console.log(err)
         dispatch({ type: 'AUTH_FAIL' })
      }
   },
   signUp: formData => async dispatch => {
      dispatch({ type: 'AUTH_START' })
      try {
         const { data } = await authApi.signUp(formData)
         dispatch({ type: 'AUTH_SUCCESS', payload: data })
      } catch (err) {
         console.log(err)
         dispatch({ type: 'AUTH_FAIL' })
      }
   },
   logout: () => async dispatch => {
      dispatch({ type: 'LOG_OUT' })
   },
}

export default authAction
