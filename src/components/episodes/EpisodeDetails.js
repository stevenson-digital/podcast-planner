import React from 'react'
import { connect } from 'react-redux'
import { firestoreConnect } from 'react-redux-firebase'
import { compose } from 'redux'
import { Redirect } from 'react-router-dom'

const EpisodeDetails = (props) => {
  const { episode, auth } = props
  if (!auth.uid) return <Redirect to="/signin" />

  if (episode) {
    return (
      <div className="c-EpisodeDetails">
        <div className="c-EpisodeDetails__content">
          <div className="c-EpisodeDetails__title">
            {episode.title}
          </div>
          <p className="c-EpisodeDetails__desc">
          {episode.content}
          </p>
          <p className="c-EpisodeDetails__date">
            25/06/2020
          </p>
        </div>
      </div>
    )
  } else {
    return (
      <div>
        <p>Loading episode</p>
      </div>
    )
  }
}

const mapStateToProps = (state, ownProps) => {
  const id = ownProps.match.params.id
  const episodes = state.firestore.data.episodes
  const episode = episodes ? episodes[id] : null

  return {
    episode: episode,
    auth: state.firebase.auth
  }
}

export default compose(
  connect(mapStateToProps),
  firestoreConnect([
    { collection: 'episodes' }
  ])
)(EpisodeDetails)
