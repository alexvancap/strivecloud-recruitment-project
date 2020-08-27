import { getGamesByName, getEventsByTournamentName} from "../../../helperfunctions/searchFilters";

const initialState = {
  input: '',
  selectedFilter: 'games',
  results: []
}


const handleFilters = (input, filter, events, games) => {
  console.log(input, filter)
  if(filter === 'games')
    return getGamesByName(input, games)
  else if(filter === 'tournaments')
    return getEventsByTournamentName(input, events)
}


const profileReducer = (state = initialState, action) => {
  switch(action.type){
    case 'UPDATE_SEARCH_INPUT':
      const newState =  {
        ...state,
        input: action.input,
        results: handleFilters(
          action.input, 
          state.selectedFilter,
          action.events,
          action.games
        )
      }
      console.log(newState)
      return newState
    case 'UPDATE_SEARCH_FILTER':
      return {
        ...state,
        selectedFilter: action.filter,
        results: handleFilters(
          state.input,
          action.filter,
          action.events,
          action.games
        )
      }
    default: return state
  }
}

export default profileReducer;