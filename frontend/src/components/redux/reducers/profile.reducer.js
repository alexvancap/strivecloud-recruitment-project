const initialState = {

}

const profileReducer = (state = initialState, action) => {
  switch(action.type){
    case 'UPDATE_PROFILE_INFO':
      const newState = {
        ...state,
        [action.key]: action.value
      }
      if(newState.username === '')
        delete newState.username
      else if(newState.email === '')
        delete newState.email
      else if(newState.password === '')
        delete newState.password
      return newState
    default: return state
  }
}

export default profileReducer;