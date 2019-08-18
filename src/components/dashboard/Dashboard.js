import React, { Component } from 'react'
import Notifications from './Notifications'
import EpisodeList from '../episodes/EpisodeList'
import { connect } from 'react-redux'
import { firestoreConnect } from 'react-redux-firebase'
import { compose } from 'redux'

class Dashboard extends Component {
  render() {
    const { episodes } = this.props

    return (
      <div className="c-Dashboard">
        <div className="c-Dashboard__episodes">
          <EpisodeList episodes={episodes} />
        </div>
        <div className="c-Dashboard__notifications">
          <Notifications />
        </div>
      </div>
    )
  }
}

const mapStateToProps = (state) => {
  return {
    episodes: state.firestore.ordered.episodes
  }
}

export default compose(
  connect(mapStateToProps),
  firestoreConnect([
    {collection: 'episodes'}
  ])
)(Dashboard)