const initialState = {
  loggedinUser: {
    username: '',
    email: '',
    firstName: '',
    lastName: '',
    email: '',
    createdAt: ''
  },
  loading: false,
  fetchedFonts: false,
}

const mainReducer = (state = initialState, action) => {
  switch(action.type){
    case 'UPDATE_LOADING':
      return {
        ...state,
        loading: !state.loading
      }
    case 'UPDATE_FETCHED_FONTS':
      return {
        ...state,
        fetchedFonts: !state.fetchedFonts
      }
    case 'UPDATE_LOGGEDIN_USER':
      console.log(action.value)
      return {
        ...state,
        loggedInUser: {
          username: action.value.username,
          email: action.value.email,
          firstName: action.value.first_name,
          lastName: action.value.last_name,
          createdAt: action.value.created_at
        }
      }
    default: return state
  }
}

export default mainReducer;