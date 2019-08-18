const initState = {
  episodes: [
    {id: 1, title: 'Side Projects', content: 'blah blah blah'},
    {id: 2, title: 'JavaScript Frameworks', content: 'blah blah blah'},
    {id: 3, title: 'Breaking the mould', content: 'blah blah blah'}
  ]
}

const episodeReducer = (state = initState, action) => {
  switch (action.type) {
    case 'CREATE_EPISODE':
      console.log('created episode', action.episode)
  }
  return state
}

export default episodeReducer