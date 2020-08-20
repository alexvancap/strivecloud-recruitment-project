export default function getEventsByGameName(gameName, events) {
  return events.filter(event => event.game === gameName).sort()
}