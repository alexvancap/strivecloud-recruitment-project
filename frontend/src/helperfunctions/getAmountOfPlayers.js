export default function (games) {
  let int = 0
  games.forEach(game => {
    return int += game.interested
  })
  return int
}