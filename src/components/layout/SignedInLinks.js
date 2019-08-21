import React from 'react'
import { NavLink } from 'react-router-dom'
import { connect } from 'react-redux'
import { signOut } from '../../store/actions/authActions'

const SignedInLinks = (props) => {
  return (
    <ul className="c-SignedInLinks">
      <li>
        <NavLink to="/create">
          New Episode
        </NavLink>
      </li>
      <li>
        <button onClick={props.signOut}>Logout</button>
      </li>
      <li>
        <NavLink to="/" className="c-SignedInLinks__user">{props.initials}</NavLink>
      </li>
    </ul>
  )
}

const mapDispatchToProps = (dispatch) => {
  return {
    signOut: () => dispatch(signOut())
  }
}

export default connect(null, mapDispatchToProps)(SignedInLinks)