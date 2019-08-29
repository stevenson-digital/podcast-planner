import React, { Component } from 'react'
import EpisodeSummary from './EpisodeSummary'
import { Link } from 'react-router-dom'
import { loadMoreEpisodes } from '../../store/actions/episodeActions'
import { connect } from 'react-redux'


class EpisodeList extends Component {
  state = {
    page: 1
  }

  handleLoadMore = (e) => {
    e.preventDefault()
    this.setState({page: this.state.page + 1})
  }

  componentDidUpdate = () => {
    if (this.state.page > 1) {
      this.props.loadMoreEpisodes(this.state.page, this.state.userID, this.state.showID)
    }
  }

  render() {
    const { episodes } = this.props

    return (
      <div className="c-EpisodeList">
        {episodes && episodes.map(episode => {
          return (
            <Link to={'/episode/' + episode.id} key={episode.createdAt.seconds}>
              <EpisodeSummary episode={episode} />
            </Link>
          )
        })}
        <button onClick={this.handleLoadMore}>Load more episodes</button>
      </div>
    )
  }
}

const mapStateToProps = (state) => {
  return {
    userID: state.firebase.auth.uid,
    showID: state.auth.activeShowID
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    loadMoreEpisodes: (page, userID, showID) => dispatch(loadMoreEpisodes(page, userID, showID))
  }
}
 
export default connect(mapStateToProps, mapDispatchToProps)(EpisodeList)