import React, { Component } from 'react'

class SignIn extends Component {
  state = {
    email: '',
    password: ''
  }

  handleOnChange = (e) => {
    this.setState({[e.target.id]: e.target.value})
  }

  handleOnSubmit = (e) => {
    e.preventDefault()
    console.log(this.state)
  }

  render() {
    return (
      <div className="c-SignIn">
        <form onSubmit={this.handleOnSubmit} className="c-SignIn__form">
          <h2 className="c-SignIn__heading">
            Sign In
          </h2>
          <div className="c-SignIn__form-row">
            <label htmlFor="email">Email</label>
            <input type="email" id="email" onChange={this.handleOnChange} />
          </div>
          <div className="c-SignIn__form-row">
            <label htmlFor="password">Password</label>
            <input type="password" id="password" onChange={this.handleOnChange} />
          </div>
          <div className="c-SignIn__form-row">
            <button type="submit">Login</button>
          </div>
        </form>
      </div>
    )
  }
}

export default SignIn
