const initState = {
  authError: null,
  userLevel: null,
  activeShow: null
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
        authError: null
      }
    case 'SIGNOUT_SUCCESS':
      return {
        ...state,
        userLevel: null,
        activeShow: null
      }
    case 'SIGNUP_SUCCESS':
      return {
        ...state,
        authError: null
      }
    case 'SIGNUP_ERROR':
      return {
        ...state,
        authError: action.error.message
      }
    case 'SET_USER_LEVEL':
      return {
        ...state,
        userLevel: action.userLevel
      }
    case 'SET_ACTIVE_SHOW':
      return {
        ...state,
        activeShow: action.activeShow
      }
    default:
      return state
  }
}

export default authReducer