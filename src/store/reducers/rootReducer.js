import authReducer from './authReducer'
import episodeReducer from './episodeReducer'
import { combineReducers } from 'redux'

const rootReducer = combineReducers({
  auth: authReducer,
  episode: episodeReducer
})

export default rootReducer