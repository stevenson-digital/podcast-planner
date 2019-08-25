import firebase from 'firebase/app'
import 'firebase/firestore'
import 'firebase/auth'

var firebaseConfig = {
  apiKey: "AIzaSyA6G6WJ9e9P5hSyvznwhBiiFzsSDDF6g54",
  authDomain: "podcast-planner.firebaseapp.com",
  databaseURL: "https://podcast-planner.firebaseio.com",
  projectId: "podcast-planner",
  storageBucket: "",
  messagingSenderId: "445914579962",
  appId: "1:445914579962:web:76ad5b189cb4f30d"
}

firebase.initializeApp(firebaseConfig)
firebase.firestore().settings({})

export default firebase