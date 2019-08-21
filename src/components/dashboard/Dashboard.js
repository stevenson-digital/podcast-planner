import React, { Component } from 'react'
import Notifications from './Notifications'
import EpisodeList from '../episodes/EpisodeList'
import { connect } from 'react-redux'
import { firestoreConnect } from 'react-redux-firebase'
import { compose } from 'redux'
import { Redirect } from 'react-router-dom'

class Dashboard extends Component {
  render() {
    const { episodes, auth, notifications } = this.props

    if (!auth.uid) return <Redirect to="/signin" />

    return (
      <div className="c-Dashboard">
        <div className="c-Dashboard__episodes">
          <EpisodeList episodes={episodes} />
        </div>
        <div className="c-Dashboard__notifications">
          <Notifications notifications={notifications} />
        </div>
      </div>
    )
  }
}

const mapStateToProps = (state) => {
  return {
    episodes: state.firestore.ordered.episodes,
    auth: state.firebase.auth,
    notifications: state.firestore.ordered.notifications
  }
}

export default compose(
  connect(mapStateToProps),
  firestoreConnect([
    { collection: 'episodes', orderBy: ['createdAt', 'desc'] },
    { collection: 'notifications', limit: 3, orderBy: ['time', 'desc'] }
  ])
)(Dashboard)