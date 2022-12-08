import uploadApi from '../apis/uploadRequest'

const uploadAction = {
   uploadImage: data => async () => {
      try {
         await uploadApi.uploadImage(data)
      } catch (err) {
         console.log(err)
      }
   },

   uploadPost: data => async dispatch => {
      dispatch({ type: 'UPLOAD_START' })
      try {
         const res = await uploadApi.uploadPost(data)
         dispatch({ type: 'UPLOAD_SUCCESS', payload: res.data })
      } catch (err) {
         console.log(err)
         dispatch({ type: 'UPLOAD_FAIL' })
      }
   },
}

export default uploadAction
