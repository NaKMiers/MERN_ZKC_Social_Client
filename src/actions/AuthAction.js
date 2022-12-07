import AuthApi from '../apis/AuthRequest'

const authAction = {
   login: formData => async dispatch => {
      dispatch({ type: 'AUTH_START' })
      try {
         const { data } = await AuthApi.login(formData)
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
         const { data } = await AuthApi.signUp(formData)
         dispatch({ type: 'AUTH_SUCCESS', payload: data })
      } catch (err) {
         console.log(err)
         dispatch({ type: 'AUTH_FAIL' })
      }
   },
}

export default authAction
