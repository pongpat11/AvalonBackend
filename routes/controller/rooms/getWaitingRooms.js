const findRoom = require('../../model/room/findRoom');

module.exports = async (req, res) => {
  const query = {
    gamePhase: 0
  }
  try {
    const roomData = await findRoom(query);
    return res.status(200).json({
      success: true,
      message: 'Query success',
      roomData
    });
  } catch (err) {
    res.json({ message: err })
  }
};