import React, { Component } from 'react'
import { connect } from 'react-redux'
import { createEpisode } from '../../store/actions/episodeActions'

class CreateEpisode extends Component {
  state = {
    title: '',
    content: ''
  }

  handleOnChange = (e) => {
    this.setState({[e.target.id]: e.target.value})
  }

  handleOnSubmit = (e) => {
    e.preventDefault()
    this.props.createEpisode(this.state)
  }

  render() {
    return (
      <div className="c-CreateEpisode">
        <form onSubmit={this.handleOnSubmit} className="c-CreateEpisode__form">
          <h2 className="c-CreateEpisode__heading">
            Create new episode
          </h2>
          <div className="c-CreateEpisode__form-row">
            <label htmlFor="title">Title</label>
            <input type="text" id="title" onChange={this.handleOnChange} />
          </div>
          <div className="c-CreateEpisode__form-row">
            <label htmlFor="content">Content</label>
            <textarea id="content" onChange={this.handleOnChange}></textarea>
          </div>
          <div className="c-CreateEpisode__form-row">
            <button type="submit">Create</button>
          </div>
        </form>
      </div>
    )
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    createEpisode: (episode) => dispatch(createEpisode(episode))
  }
}

export default connect(null, mapDispatchToProps)(CreateEpisode)
