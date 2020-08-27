const initialState = {
  isLoggedIn: false,
  login: {
    username: '',
    password: '',
  },
  signup: {
    username: '',
    email: '',
    password: '',
    firstName: '',
    lastName: ''
  }
}

const authReducer = (state = initialState, action) => {
  switch(action.type){
    case 'UPDATE_LOGIN_INFO':
      return {
        ...state,
        login: {
          ...state.login,
          [action.key]: action.value
        }
      }
    case 'UPDATE_SIGNUP_INFO':
      return {
        ...state,
        signup: {
          ...state.signup,
          [action.key]: action.value
        }
      }
    case 'UPDATE_LOGGED_IN':
      return {
        ...state,
        isLoggedIn: action.value
      }
    default: return state
  }
}

export default authReducer;