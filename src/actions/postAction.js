import postApi from '../apis/postRequest'

const authAction = {
   getTimeLinePosts: id => async dispatch => {
      dispatch({ type: 'RETREVING_START' })
      try {
         const { data } = await postApi.getTimeLinePosts(id)
         dispatch({ type: 'RETREVING_SUCCESS', data })
      } catch (err) {
         console.log(err)
         dispatch({ type: 'RETREVING_FAIL' })
      }
   },
}

export default authAction
