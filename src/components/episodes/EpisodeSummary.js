import React from 'react'
import dayjs from 'dayjs'

const EpisodeSummary = ({episode}) => {
  return (
    <div className="c-EpisodeSummary">
      <h2 className="c-EpisodeSummary__title">
        {episode.title}
      </h2>
      <p className="c-EpisodeSummary__date">
        Air Date: currently 'createdAt' - {dayjs(episode.createdAt.toDate()).format('DD/MM/YYYY')}
      </p>
    </div>
  )
}

export default EpisodeSummary