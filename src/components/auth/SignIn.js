import React, { Component } from 'react'
import { connect } from 'react-redux'
import { signIn } from '../../store/actions/authActions'
import { Redirect, Link } from 'react-router-dom'

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
    this.props.signIn(this.state)
  }

  render() {
    const { authError, auth } = this.props
    if (auth.uid) return <Redirect to="/" />

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
          <div>
            {authError ? authError : null}
          </div>
          <Link to="/forgot-password">Forgot password</Link>
        </form>
      </div>
    )
  }
}

const mapStateToProps = (state) => {
  return {
    authError: state.auth.authError,
    auth: state.firebase.auth
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    signIn: (creds) => dispatch(signIn(creds))
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(SignIn)
