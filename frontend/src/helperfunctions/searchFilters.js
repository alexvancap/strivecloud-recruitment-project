const nameFilter = (input, arr) => {
  input = input.toLowerCase();
  return arr.filter(item => {
    item = item.toLowerCase();
    return item.includes(input)
  })
}

const getEventsByGameName = (gameName, events) => {
  return events.filter(event => event.game === gameName)
}

export {
  nameFilter,
  getEventsByGameName
}