import React, { Component } from 'react'
import { Redirect } from 'react-router-dom'
import { connect } from 'react-redux';
import { signUp, checkShowExists } from '../../store/actions/authActions'
import { reduxFirestore, getFirestore } from 'redux-firestore'

class SignUp extends Component {
  state = {
    email: '',
    password: '',
    confirmPassword: '',
    firstName: '',
    lastName: '',
    showName: '',
    validationError: ''
  }

  handleOnChange = (e) => {
    this.setState({[e.target.id]: e.target.value})
  }

  handleOnSubmit = (e) => {
    e.preventDefault()
    this.validateForm()
  }

  validateForm() {
    let valid = true
    const self = this

    // Check if the show name has already been taken
    const firestore = getFirestore()
    const showID = this.state.showName.replace(/([a-z])([A-Z])/g, '$1-$2').replace(/\s+/g, '-').replace("'", '').toLowerCase()

    firestore.collection('shows').doc(showID).get()
      .then((doc) => {
        if (doc.exists) {
          self.setState({validationError: 'Show name is already taken'})
        } else {
          // Check password fields match
          if (self.state.password != self.state.confirmPassword) {
            valid = false
            self.setState({validationError: 'Passwords must match'})
          }
      
          if (valid) {
            self.props.signUp(self.state)
          }
        }
      })
  }

  render() {
    const { auth, authError } = this.props

    if (auth.uid) return <Redirect to="/" />

    return (
      <div className="c-SignUp">
        <form onSubmit={this.handleOnSubmit} className="c-SignUp__form">
          <h2 className="c-SignUp__heading">
            Sign Up
          </h2>
          <div className="c-SignUp__form-row">
            <label htmlFor="firstName">
              First Name
            </label>
            <input type="text" id="firstName" onChange={this.handleOnChange} required />
          </div>
          <div className="c-SignUp__form-row">
            <label htmlFor="lastName">
              Last Name
            </label>
            <input type="text" id="lastName" onChange={this.handleOnChange} required />
          </div>
          <div className="c-SignUp__form-row">
            <label htmlFor="email">
              Email
            </label>
            <input type="email" id="email" onChange={this.handleOnChange} required />
          </div>
          <div className="c-SignUp__form-row">
            <label htmlFor="showName">
              Show Name
              <span>(The name of your podcast)</span>
            </label>
            <input type="text" id="showName" onChange={this.handleOnChange} required />
          </div>
          <div className="c-SignUp__form-row">
            <label htmlFor="password">
              Password
            </label>
            <input type="password" id="password" onChange={this.handleOnChange} required />
          </div>
          <div className="c-SignUp__form-row">
            <label htmlFor="confirmPassword">
              Confirm Password
            </label>
            <input type="password" id="confirmPassword" onChange={this.handleOnChange} required />
          </div>
          <div className="c-SignUp__form-row">
            <button type="submit">
              Sign up
            </button>
          </div>
          <div>
            { authError ? <p>{authError}</p> : null }
            { this.state.validationError ? <p>{this.state.validationError}</p> : null }
          </div>
        </form>
      </div>
    )
  }
}

const mapStateToProps = (state) => {
  return {
    auth: state.firebase.auth,
    authError: state.auth.authError
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    signUp: (newUser) => dispatch(signUp(newUser))
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(SignUp)
