const initState = {
   posts: [],
   error: false,
   uploading: false,
}

function postReducer(state = initState, action) {
   switch (action.type) {
      case 'UPLOAD_START':
         return { ...state, uploading: true, error: false }

      case 'UPLOAD_SUCCESS':
         return {
            ...state,
            posts: [action.payload, ...state.posts],
            uploading: false,
            error: false,
         }

      case 'UPLOAD_FAIL':
         return { ...state, uploading: false, error: true }

      default:
         return state
   }
}

export default postReducer
