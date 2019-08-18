import React from 'react'

const EpisodeDetails = (props) => {
  const id = props.match.params.id
  return (
    <div className="c-EpisodeDetails">
      <div className="c-EpisodeDetails__content">
        <div className="c-EpisodeDetails__title">
          Episode Title ({id})
        </div>
        <p className="c-EpisodeDetails__desc">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc pretium viverra nulla id vestibulum. Praesent luctus leo ac odio bibendum dignissim.
        </p>
        <p className="c-EpisodeDetails__date">
          25/06/2020
        </p>
      </div>
    </div>
  )
}

export default EpisodeDetails
