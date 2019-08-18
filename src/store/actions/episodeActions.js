export const createEpisode = (episode) => {
  return (dispatch, getState, { getFirestore, getFirebase }) => {
    // Make async call to db
    const firestore = getFirestore()
    const profile = getState().firebase.profile
    const authorID = getState().firebase.auth.uid

    firestore.collection('episodes').add({
      ...episode,
      authorFirstName: profile.firstName,
      authorLastName: profile.lastName,
      authorID: authorID,
      createdAt: new Date()
    }).then(() => {
      dispatch({type: 'CREATE_EPISODE', episode})
    }).catch((error) => {
      dispatch({type: 'CREATE_EPISODE_ERROR', error})
    })
  }
}