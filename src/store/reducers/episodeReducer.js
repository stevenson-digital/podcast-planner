const initState = {
  createEpisodeError: null,
  userEpisodes: []
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
    case 'SET_USER_EPISODES':
      return {
        ...state,
        userEpisodes: action.episodes
      }
    default:
      return state
  }
}

export default episodeReducer