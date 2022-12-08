import { combineReducers } from 'redux'
import authReducer from './authReducer'
import postReducer from './postReducer'

const reducers = combineReducers({
   authReducer,
   postReducer,
})

export default reducers
