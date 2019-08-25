import React from 'react'
import EpisodeSummary from './EpisodeSummary'
import { Link } from 'react-router-dom'

const EpisodeList = ({ episodes }) => {
  console.log('Episode List:', episodes)
  return (
    <div className="c-EpisodeList">
      {episodes && episodes.map(episode => {
        return (
          <Link to={'/episode/' + episode.id} key={episode.id}>
            <EpisodeSummary episode={episode} />
          </Link>
        )
      })}
    </div>
  )
}

export default EpisodeList