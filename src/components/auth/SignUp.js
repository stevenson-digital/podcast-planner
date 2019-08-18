import React, { Component } from 'react'

class SignUp extends Component {
  state = {
    email: '',
    password: '',
    firstName: '',
    lastName: ''
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
      <div className="c-SignUp">
        <form onSubmit={this.handleOnSubmit} className="c-SignUp__form">
          <h2 className="c-SignUp__heading">
            Sign Up
          </h2>
          <div className="c-SignUp__form-row">
            <label htmlFor="firstName">First Name</label>
            <input type="text" id="firstName" onChange={this.handleOnChange} />
          </div>
          <div className="c-SignUp__form-row">
            <label htmlFor="lastName">Last Name</label>
            <input type="text" id="lastName" onChange={this.handleOnChange} />
          </div>
          <div className="c-SignUp__form-row">
            <label htmlFor="email">Email</label>
            <input type="email" id="email" onChange={this.handleOnChange} />
          </div>
          <div className="c-SignUp__form-row">
            <label htmlFor="password">Password</label>
            <input type="password" id="password" onChange={this.handleOnChange} />
          </div>
          <div className="c-SignUp__form-row">
            <button type="submit">Sign up</button>
          </div>
        </form>
      </div>
    )
  }
}

export default SignUp
