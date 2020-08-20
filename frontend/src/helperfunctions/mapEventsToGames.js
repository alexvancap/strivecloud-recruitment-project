export default function mapEventsToGames(events) {
  let games = [];
  events.forEach(event => {
    if(!games.includes(event.game))
      games.push(event.game)
  })
  return games.sort()
}