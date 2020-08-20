export default function getUniqueEventNames(events) {
  let uniqueEvents = [];
  events.forEach(event => {
    if(uniqueEvents.includes(event.name))
      return ;
    return uniqueEvents.push(event.name)
  })
  return uniqueEvents
}