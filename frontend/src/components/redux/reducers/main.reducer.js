const initialState = {
  loggedinUser: {
    id: '',
    username: '',
    email: '',
    firstName: '',
    lastName: '',
    email: '',
    createdAt: ''
  },
  fetchedFonts: false
}

const mainReducer = (state = initialState, action) => {
  switch(action.type){
    case 'UPDATE_LOADING':
      return {
        ...state,
        loading: !state.loading
      }
    case 'UPDATE_LOGGEDIN_USER':
      return {
        ...state,
        loggedinUser: {
          ...state.loggedinUser,
          id: action.value.id,
          username: action.value.username,
          email: action.value.email,
          firstName: action.value.first_name,
          lastName: action.value.last_name,
          createdAt: action.value.created_at
        }
      }
     case 'MAIN_UPDATE_PROFILE_INF':
      return {
        ...state,
        loggedinUser: {
          ...state.loggedinUser,
          ...action.value
        }
      }
    case 'UPDATE_FETCHED_FONTS':
      return {
        ...state,
        fetchedFonts: action.value
      }
    default: return state
  }
}

export default mainReducer;