const initState = {
  authError: null,
  userLevel: null,
  activeShowID: null,
  activeShowTitle: null
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
    case 'SET_ACTIVE_SHOW_ID':
      return {
        ...state,
        activeShowID: action.activeShowID
      }
    case 'SET_ACTIVE_SHOW_TITLE':
      return {
        ...state,
        activeShowTitle: action.activeShowTitle
      }
    default:
      return state
  }
}

export default authReducer