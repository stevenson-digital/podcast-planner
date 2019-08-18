import React, { Component } from 'react'
import fire from '../config/Fire'

class Home extends Component {
  constructor(props) {
    super(props)
    this.logout = this.logout.bind(this)
  }

  logout() {
    fire.auth().signOut();
  }

  render() {
    return (
      <h1>Home screen after login</h1>
    )
  }
}

export default Home;
