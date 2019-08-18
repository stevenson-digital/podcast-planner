export const createEpisode = (episode) => {
  return (dispatch, getState, { getFirestore, getFirebase }) => {
    // Make async call to db
    const firestore = getFirestore()
    firestore.collection('episodes').add({
      ...episode,
      createdAt: new Date()
    }).then(() => {
      dispatch({type: 'CREATE_EPISODE', episode})
    }).catch((error) => {
      dispatch({type: 'CREATE_EPISODE_ERROR', error})
    })
  }
}