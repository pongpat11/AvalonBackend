const rooms = [];

const addRoom = ({ roomName, password, roomMode, roomSize }) => {
  const room = {
    id: rooms.length,
    roomName,
    password,
    roomMode,
    roomSize,
    players: []
  }
  rooms.push(room)
  return room
}

const getAllRoom = () => {
  return rooms
}

const getRoom = ({ roomId }) => {
  const roomIndex = rooms.findIndex(room => room.id === roomId)
  if (roomIndex > -1) {
    return rooms[roomIndex]
  }
  return false
}

const getPlayerInRoom = ({ roomId }) => {
  const roomIndex = rooms.findIndex(room => room.id === roomId)
  if (roomIndex > -1) {
    return rooms[roomIndex].players
  }
  return false
}

module.exports = { addRoom, getRoom, getPlayerInRoom, getAllRoom }