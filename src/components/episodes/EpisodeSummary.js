import React from 'react'

const EpisodeSummary = ({episode}) => {
  return (
    <div className="c-EpisodeSummary">
      <h2 className="c-EpisodeSummary__title">
        {episode.title}
      </h2>
      <p className="c-EpisodeSummary__date">
        02/09/2019
      </p>
    </div>
  )
}

export default EpisodeSummary