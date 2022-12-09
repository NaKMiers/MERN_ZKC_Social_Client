const initState = {
   authData: null,
   loading: false,
   updateLoading: false,
   error: false,
}

function authReducer(state = initState, action) {
   switch (action.type) {
      case 'AUTH_START':
         return { ...state, loading: true, error: false }

      case 'AUTH_SUCCESS':
         localStorage.setItem('profile', JSON.stringify({ ...action?.payload }))
         return { ...state, authData: action.payload, loading: false, error: false }

      case 'AUTH_FAIL':
         return { ...state, loading: false, error: true }

      case 'UPDATE_START':
         return { ...state, updateLoading: true, error: false }

      case 'UPDATE_SUCCESS':
         localStorage.setItem('profile', JSON.stringify({ ...action?.payload }))
         return { ...state, authData: action.payload, updateLoading: false, error: false }

      case 'UPDATE_FAIL':
         return { ...state, updateLoading: false, error: true }

      case 'FOLLOW_USER':
         console.log('action.payload-id: ', action.payload)
         return {
            ...state,
            authData: {
               ...state.authData,
               user: {
                  ...state.authData.user,
                  followings: [...state.authData.user.followings, action.payload],
               },
            },
            updateLoading: false,
            error: false,
         }

      case 'UNFOLLOW_USER':
         return {
            ...state,
            authData: {
               ...state.authData,
               user: {
                  ...state.authData.user,
                  followings: state.authData.user.followings.filter(id => id !== action.payload),
               },
            },
            updateLoading: false,
            error: false,
         }

      case 'LOG_OUT':
         localStorage.clear()
         return { ...state, authData: null, loading: false, error: false }

      default:
         return state
   }
}

export default authReducer
