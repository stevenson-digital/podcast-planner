const initState = {
  createEpisodeError: null
}

const episodeReducer = (state = initState, action) => {
  switch (action.type) {
    case 'CREATE_EPISODE':
      return state
    case 'CREATE_EPISODE_ERROR':
      return {
        ...state,
        createEpisodeError: action.error.message
      }
    default:
      return state
  }
}

export default episodeReducer