export const createEpisode = (episode) => {
  return (dispatch, getState, { getFirestore, getFirebase }) => {
    // Make async call to db
    const firestore = getFirestore()
    const profile = getState().firebase.profile
    const authorID = getState().firebase.auth.uid

    // Get the showOwner's showID
    firestore.collection('shows').where('showOwner', '==', authorID)
      .get()
      .then(snapshot => {
        let showID = null

        snapshot.forEach(doc => {
          // Only ever 1 show per showOwner account
          showID = doc.id
        })

        // Add the episode to Firestore
        firestore.collection('episodes').add({
          ...episode,
          authorFirstName: profile.firstName,
          authorLastName: profile.lastName,
          authorID: authorID,
          showID: showID,
          allHostNotesReady: false,
          createdAt: new Date()
        }).then(() => {
          dispatch({type: 'CREATE_EPISODE', episode})
        }).catch((error) => {
          dispatch({type: 'CREATE_EPISODE_ERROR', error})
        })
      })
  }
}