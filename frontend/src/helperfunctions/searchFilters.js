const nameFilter = (input, arr) => {
  input = input.toLowerCase();
  return arr.filter(item => {
    item = item.toLowerCase();
    return item.includes(input)
  })
}

const getEventsByGameName = (gameName, events) =>
  events.filter(event => event.game.includes(gameName))

const getGamesByName = (name, games) => {
  console.log(games)
  return games.filter(game => game.includes(name))
}

const getEventsByTournamentName = (input, events) =>
  events.filter(event => event.name.includes(input))

export {
  nameFilter,
  getEventsByGameName,
  getEventsByTournamentName,
  getGamesByName
}