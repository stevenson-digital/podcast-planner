export const signIn = (credentials) => {
  return (dispatch, getState, {getFirebase}) => {
    const firebase = getFirebase()

    firebase.auth().signInWithEmailAndPassword(
      credentials.email,
      credentials.password
    ).then(() => {
      dispatch({type: 'LOGIN_SUCCESS'})
    }).catch((error) => {
      dispatch({type: 'LOGIN_ERROR', error})
    })
  }
}

export const signOut = () => {
  return (dispatch, getState, {getFirebase}) => {
    const firebase = getFirebase()

    firebase.auth().signOut().then(() => {
      dispatch({type: 'SIGNOUT_SUCCESS'})
    })
  }
}

export const signUp = (newUser) => {
  return (dispatch, getState, {getFirebase, getFirestore}) => {
    const firebase = getFirebase()
    const firestore = getFirestore()
    const showName = newUser.showName
    let showOwner = null

    firebase.auth().createUserWithEmailAndPassword(
      newUser.email,
      newUser.password
    ).then((resp) => {
      showOwner = resp.user.uid
      return firestore.collection('users').doc(resp.user.uid).set({
        userLevel: 'showOwner',
        firstName: newUser.firstName,
        lastName: newUser.lastName,
        initials: newUser.firstName[0].toUpperCase() + newUser.lastName[0].toUpperCase(),
        showName: showName
      })
    }).then(() => {
      dispatch(addShow(showName, showOwner))
    }).catch((error) => {
      dispatch({type: 'SIGNUP_ERROR', error})
    })
  }
}

export const addShow = (showName, showOwner) => {
  return (dispatch, getState, {getFirestore}) => {
    const firestore = getFirestore()
    const showID = showName.replace(/([a-z])([A-Z])/g, '$1-$2').replace(/\s+/g, '-').replace("'", '').toLowerCase()
    
    firestore.collection('shows').doc(showID).set({
      showName: showName,
      showOwner: showOwner
    }).then(() => {
      dispatch({type: 'SIGNUP_SUCCESS'})
    }).catch((error) => {
      dispatch({type: 'SIGNUP_ERROR', error})
    })
  }
}