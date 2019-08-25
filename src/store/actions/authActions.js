export const signIn = (credentials) => {
  return (dispatch, getState, { getFirebase }) => {
    const firebase = getFirebase()

    firebase.auth().signInWithEmailAndPassword(
      credentials.email,
      credentials.password
    ).then(() => {
      dispatch(setUserLevelAndActiveShow())
    }).then(() => {
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
  return (dispatch, getState, { getFirebase, getFirestore }) => {
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
    }).then(() => {
      dispatch(setUserLevelAndActiveShow())
    }).then(() => {
      dispatch({type: 'SIGNUP_SUCCESS'})
    })
    .catch((error) => {
      dispatch({type: 'SIGNUP_ERROR', error})
    })
  }
}

export const addShow = (showName, showOwner) => {
  return (dispatch, getState, { getFirestore }) => {
    const firestore = getFirestore()
    const showID = showName.replace(/([a-z])([A-Z])/g, '$1-$2').replace(/\s+/g, '-').replace("'", '').toLowerCase()
    
    firestore.collection('shows').doc(showID).set({
      id: showID,
      showName: showName,
      showOwner: showOwner
    }).catch((error) => {
      dispatch({type: 'SIGNUP_ERROR', error})
    })
  }
}

export const setUserLevelAndActiveShow = () => {
  return (dispatch, getState, { getFirestore }) => {
    const firestore = getFirestore()

    // Get the user level
    firestore.collection('users').get()
    .then(snapshot => {
      let userLevel = null
      let activeShowID = null
      let activeShowTitle = null
      
      // Loop over user documents and match to the ID of newly logged in user
      snapshot.forEach(function(doc) {
        if (getState().firebase.auth.uid === doc.id) {
          const data = doc.data()
          userLevel = data.userLevel
          activeShowID = data.showName.replace(/([a-z])([A-Z])/g, '$1-$2').replace(/\s+/g, '-').replace("'", '').toLowerCase()
          activeShowTitle = data.showName
        }
      })

      dispatch({type: 'SET_USER_LEVEL', userLevel})
      dispatch({type: 'SET_ACTIVE_SHOW_ID', activeShowID})
      dispatch({type: 'SET_ACTIVE_SHOW_TITLE', activeShowTitle})

      setEpisodes(activeShowID)
    })

    const setEpisodes = (activeShowID) => {
      firestore.collection('episodes')
      .where('showID', '==', activeShowID)
      .orderBy('createdAt', 'desc')
      .get()
      .then(snapshot => {
        let episodes = []

        snapshot.forEach(episode => {
          episodes.push(episode.data())
        })

        dispatch({type: 'SET_USER_EPISODES', episodes})
      })
    }
  }
}