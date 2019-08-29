import React, { Component } from 'react'
import { connect } from 'react-redux'
import { createEpisode } from '../../store/actions/episodeActions'
import { Redirect } from 'react-router-dom'

class CreateEpisode extends Component {
  state = {
    title: '',
    airDate: '',
    newTopic: '',
    minutes: '',
    topics: []
  }

  handleOnChange = (e) => {
    this.setState({[e.target.id]: e.target.value})
  }

  handleAddTopic = (e) => {
    e.preventDefault()
    this.setState(prevState => ({
      topics: [...prevState.topics, [this.state.newTopic, this.state.minutes]]
    }))
  }

  handleOnSubmit = (e) => {
    e.preventDefault()
    this.props.createEpisode(this.state)
    this.props.history.push('/')
  }

  render() {
    const { auth } = this.props
    if (!auth.uid) return <Redirect to="/signin" />

    return (
      <div className="c-CreateEpisode">
        <form onSubmit={this.handleOnSubmit} className="c-CreateEpisode__form">
          <h2 className="c-CreateEpisode__heading">
            Create new episode
          </h2>
          <div className="c-CreateEpisode__form-row">
            <label htmlFor="title">
              Title
            </label>
            <input type="text" id="title" onChange={this.handleOnChange} />
          </div>
          <div className="c-CreateEpisode__form-row">
            <label htmlFor="airDate">
              Air Date
            </label>
            <input type="text" id="airDate" onChange={this.handleOnChange} />
          </div>
          <div className="c-AddTopics">
            <h2 className="c-AddTopics__heading">Add Topics</h2>
            <div className="c-AddTopics__topic">
              <div>
                <label htmlFor="newTopic">
                  Topic heading
                </label>
                <input type="text" id="newTopic" onChange={this.handleOnChange} />
              </div>
              <div>
                <label htmlFor="minutes">
                  Rough time needed (minutes)
                </label>
                <input type="number" id="minutes" onChange={this.handleOnChange} />
              </div>
              <button onClick={this.handleAddTopic}>
                Add Topic
              </button>
            </div>
          </div>
          {this.state.topics.length > 0 &&
            <div className="c-AddedTopics">
              <h3 className="c-AddedTopics__heading">Added Topics</h3>
              {this.state.topics.map((topic) => {
                  return (
                    <div className="c-AddedTopics__topic" key={`topic-${topic}`}>
                      {topic[0]} - {topic[1]} minutes
                    </div>
                  )
                })
              }
            </div>
          }
          <div className="c-CreateEpisode__form-row">
            <button type="submit">
              Create Episode
            </button>
          </div>
        </form>
      </div>
    )
  }
}

const mapStateToProps = (state) => {
  return {
    auth: state.firebase.auth
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    createEpisode: (episode) => dispatch(createEpisode(episode))
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(CreateEpisode)
