const players = [];

const addPlayer = ({ id, username, photoUrl }) => {
  const existingUser = players.findIndex(player => player.id === id)
  if (existingUser <= -1) {
    players.push({ id, username, photoUrl })
    return true
  }
  return false
}

const getPlayers = () => {
  return players;
}

const removePlayer = ({ id }) => {
  const playerIndex = players.findIndex(player => player.id === id)
  if (playerIndex > -1) {
    players.pop(playerIndex)
    return true
  }
  return false
}

module.exports = { addPlayer, removePlayer, getPlayers }