const initialState = {
  username:'',
  first_name:'',
  last_name: '',
  email: '',
  password:''
}

const profileReducer = (state = initialState, action) => {
  switch(action.type){
    case 'SAVE_EVENTS':
      return {
        ...state,
        events: action.events,
        fetchedEvents: true
      }
    default: return state
  }
}

export default profileReducer;