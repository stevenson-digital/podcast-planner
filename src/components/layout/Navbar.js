import React from 'react'
import { Link } from 'react-router-dom'
import SignedInLinks from './SignedInLinks'
import SignedOutLinks from './SignedOutLinks'
import { connect } from 'react-redux'

const Navbar = (props) => {
  const { auth, profile } = props
  const links = auth.uid ? <SignedInLinks initials={profile.initials} /> : <SignedOutLinks />

  return (
    <nav className="c-Navbar">
      <Link to="/">
        Home
      </Link>
      {links}
    </nav>
  )
}

const mapStateToProps = (state) => {
  console.log(state)
  return {
    auth: state.firebase.auth,
    profile: state.firebase.profile
  }
}

export default connect(mapStateToProps)(Navbar)