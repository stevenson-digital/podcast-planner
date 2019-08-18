import authReducer from './authReducer'
import episodeReducer from './episodeReducer'
import { combineReducers } from 'redux'
import { firestoreReducer } from 'redux-firestore'

const rootReducer = combineReducers({
  auth: authReducer,
  episode: episodeReducer,
  firestore: firestoreReducer
})

export default rootReducer