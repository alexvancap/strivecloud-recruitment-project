import mapEventsToGames from "../../../helperfunctions/mapEventsToGames";

const initialState = {
  events: [],
  games: [],
  fetchedEvents: false,
  searchValue: '',
  searchResults: []
}

const homeReducer = (state = initialState, action) => {
  switch(action.type){
    case 'SAVE_EVENTS':
      return {
        ...state,
        events: action.events,
        games: mapEventsToGames(action.events),
        fetchedEvents: true
      }
    case 'H_UPDATE_SEARCH_VALUE':
      return {
        ...state,
        searchValue: action.value
      }
    case 'H_UPDATE_SEARCH_RESULTS':
      return {
        ...state,
        searchResults: action.results
      }
    default: return state
  }
}

export default homeReducer;