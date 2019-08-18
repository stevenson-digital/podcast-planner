import React from 'react'
import { NavLink } from 'react-router-dom'

const SignedOutLinks = () => {
  return (
    <ul className="c-SignedOutLinks">
      <li>
        <NavLink to="/signup">
          Sign up
        </NavLink>
      </li>
      <li>
        <NavLink to="/signin">
          Login
        </NavLink>
      </li>
    </ul>
  )
}

export default SignedOutLinks