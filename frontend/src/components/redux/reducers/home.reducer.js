const initialState = {
  events: [],
  fetchedEvents: false,
}

const homeReducer = (state = initialState, action) => {
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

export default homeReducer;