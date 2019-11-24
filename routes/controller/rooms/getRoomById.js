const findRoom = require('../../model/room/findRoom');

module.exports = async (req, res) => {
  const query = {
    _id: req.params.id
  }

  try {
    const roomData = await findRoom(query);
    if (roomData) {
      return res.status(200).json({
        success: true,
        message: 'Found a room',
        roomData: roomData[0]
      });
    } else {
      return res.json({
        success: false,
        message: 'Room not found'
      })
    }
  } catch (err) {
    res.json({
      success: false,
      message: err
    })
  }
}