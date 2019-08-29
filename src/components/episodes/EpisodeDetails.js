import React from 'react'
import { connect } from 'react-redux'
import { firestoreConnect } from 'react-redux-firebase'
import { compose } from 'redux'
import { Redirect } from 'react-router-dom'
import dayjs from 'dayjs'

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
          <p className="c-EpisodeDetails__date">
            Air Date: currently 'createdAt' - {dayjs(episode.createdAt.toDate()).format('DD/MM/YYYY')}
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
