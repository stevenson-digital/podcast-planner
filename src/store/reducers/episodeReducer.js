const initState = {
  episodes: []
}

const episodeReducer = (state = initState, action) => {
  switch (action.type) {
    case 'CREATE_EPISODE':
      return state
    case 'CREATE_EPISODE_ERROR':
      return state
    default:
      return state
  }
}

export default episodeReducer