const initialState = {
  loading: false,
  fetchedFonts: false
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
    default: return state
  }
}

export default mainReducer;