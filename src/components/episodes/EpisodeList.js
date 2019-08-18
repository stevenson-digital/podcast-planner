import React from 'react'
import EpisodeSummary from './EpisodeSummary'
import { Link } from 'react-router-dom'

const EpisodeList = ({episodes}) => {
  return (
    <div className="c-EpisodeList">
      {episodes && episodes.map(episode => {
        return (
          <Link to={'/episode/' + episode.id}>
            <EpisodeSummary episode={episode} key={episode.id} />
          </Link>
        )
      })}
    </div>
  )
}

export default EpisodeList