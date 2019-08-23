import React, { Component } from 'react'
// import { connect } from 'react-redux';
// import { ForgotPassword, checkShowExists } from '../../store/actions/authActions'
// import { reduxFirestore, getFirestore } from 'redux-firestore'

class ForgotPassword extends Component {
  state = {
    email: ''
  }

  handleOnChange = (e) => {
    this.setState({[e.target.id]: e.target.value})
  }

  handleOnSubmit = (e) => {
    e.preventDefault()
    console.log('submit to firebase')
  }

  render() {
    return (
      <div className="c-ForgotPassword">
        <form onSubmit={this.handleOnSubmit} className="c-ForgotPassword__form">
          <h2 className="c-ForgotPassword__heading">
            Forgot password
          </h2>
          <p>If the email address exists on our database we will send a password reset link</p>
          <div className="c-ForgotPassword__form-row">
            <label htmlFor="email">
              Email
            </label>
            <input type="email" id="email" onChange={this.handleOnChange} required />
          </div>
          <div className="c-ForgotPassword__form-row">
            <button type="submit">
              Request password reset
            </button>
          </div>
        </form>
      </div>
    )
  }
}

export default ForgotPassword
