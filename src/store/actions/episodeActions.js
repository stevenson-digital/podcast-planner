export const createEpisode = (episode) => {
  return (dispatch, getState) => {
    // make async call to db
    dispatch({type: 'CREATE_EPISODE', episode})
  }
}