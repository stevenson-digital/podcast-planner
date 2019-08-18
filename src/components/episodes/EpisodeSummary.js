import React from 'react'
import moment from 'moment'

const EpisodeSummary = ({episode}) => {
  return (
    <div className="c-EpisodeSummary">
      <h2 className="c-EpisodeSummary__title">
        {episode.title}
      </h2>
      <p className="c-EpisodeSummary__date">
        Plan created: {moment(episode.createdAt.toDate()).calendar()}
      </p>
    </div>
  )
}

export default EpisodeSummary