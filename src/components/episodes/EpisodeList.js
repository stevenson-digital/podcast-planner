import React from 'react'
import EpisodeSummary from './EpisodeSummary'

const EpisodeList = ({episodes}) => {
  return (
    <div className="c-EpisodeList">
      {episodes && episodes.map(episode => {
        return (
          <EpisodeSummary episode={episode} key={episode.id} />
        )
      })}
    </div>
  )
}

export default EpisodeList