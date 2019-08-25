import React from 'react'
import { NavLink } from 'react-router-dom'
import { connect } from 'react-redux'
import { signOut } from '../../store/actions/authActions'

const SignedInLinks = (props) => {
  const addEpisode = (props.userLevel === 'showOwner') ? <li><NavLink to="/create">New Episode</NavLink></li> : null
  
  return (
    <ul className="c-SignedInLinks">
      {addEpisode}
      <li>
        <button onClick={props.signOut}>Logout</button>
      </li>
      <li>
        <NavLink to="/" className="c-SignedInLinks__user">{props.initials}</NavLink>
      </li>
    </ul>
  )
}

const mapStateToProps = (state) => {
  return {
    userLevel: state.auth.userLevel
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    signOut: () => dispatch(signOut())
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(SignedInLinks)