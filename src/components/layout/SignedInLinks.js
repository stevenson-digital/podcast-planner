import React from 'react'
import { NavLink } from 'react-router-dom'

const SignedInLinks = () => {
  return (
    <ul className="c-SignedInLinks">
      <li>
        <NavLink to="/create">
          New Episode
        </NavLink>
      </li>
      <li>
        <NavLink to="/">
          Logout
        </NavLink>
      </li>
      <li>
        <NavLink to="/" className="c-SignedInLinks__user">OS</NavLink>
      </li>
    </ul>
  )
}

export default SignedInLinks