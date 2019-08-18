import React, { Component } from 'react'
import fire from '../config/Fire'
import ErrorMsg from './ErrorMsg'

class Login extends Component {
  constructor(props) {
    super(props)
    this.login = this.login.bind(this)
    this.handleChange = this.handleChange.bind(this)
    this.signup = this.signup.bind(this)
    this.state = {
      email: '',
      password: '',
      error: null
    }
  }

  handleChange(e) {
    this.setState({[e.target.name]: e.target.value})
  }

  login(e) {
    e.preventDefault()
    fire.auth().signInWithEmailAndPassword(this.state.email, this.state.password).catch((error) => {
      console.log(error)
      this.setState({error: error.message})
    })
  }

  signup(e){
    e.preventDefault()
    fire.auth().createUserWithEmailAndPassword(this.state.email, this.state.password).catch((error) => {
      console.log(error)
    })
  }

  render() {
    let errorMsg = null

    if (this.state.error) {
      errorMsg = <ErrorMsg msg={this.state.error} />
    }

    return (
      <div className="col-md-6">
        <form>
          <input
            value={this.state.email}
            onChange={this.handleChange}
            type="email"
            name="email"
            placeholder="Enter email" />
          <input
            value={this.state.password}
            onChange={this.handleChange}
            type="password"
            name="password"
            placeholder="Password" />
          <button type="submit" onClick={this.login}>
            Login
          </button>
          <button onClick={this.signup}>
            Signup
          </button>
          {errorMsg}
        </form>
      </div>
    )
  }
}
export default Login;