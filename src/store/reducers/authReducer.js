const initState = {
  authError: null,
  userLevel: null,
  activeShowID: null
}

const authReducer = (state = initState, action) => {
  switch (action.type) {
    case 'LOGIN_ERROR':
      return {
        ...state,
        authError: action.error.message
      }
    case 'LOGIN_SUCCESS':
      return {
        ...state,
        authError: null,
        userLevel: action.userLevel,
        activeShowID: 'madness'
      }
    case 'SIGNOUT_SUCCESS':
      return {
        ...state,
        userLevel: null,
        activeShowID: null
      }
    case 'SIGNUP_SUCCESS':
      return {
        ...state,
        authError: null,
        userLevel: action.userLevel,
        activeShowID: 'madness'
      }
    case 'SIGNUP_ERROR':
      return {
        ...state,
        authError: action.error.message
      }
    default:
      return state
  }
}

export default authReducer