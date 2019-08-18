import authReducer from './authReducer'
import episodeReducer from './episodeReducer'
import { combineReducers } from 'redux'
import { firestoreReducer } from 'redux-firestore'
import { firebaseReducer } from 'react-redux-firebase'

const rootReducer = combineReducers({
  auth: authReducer,
  episode: episodeReducer,
  firestore: firestoreReducer,
  firebase: firebaseReducer
})

export default rootReducer