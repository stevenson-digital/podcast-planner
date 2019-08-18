import React, { Component } from 'react'
import Notifications from './Notifications'
import EpisodeList from '../episodes/EpisodeList'
import { connect } from 'react-redux'

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
    episodes: state.episode.episodes
  }
}

export default connect(mapStateToProps)(Dashboard)