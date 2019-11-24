const Room = require('../../schema/Room');
const insertRoom = require('../model/room/insertRoom');

module.exports = async (req, res) => {
    try {
        const room = new Room({
            roomName: req.body.roomName,
            roomPassword: req.body.roomPassword,
            leader: req.body.leader,
            player: req.body.player,
            gamePhase: req.body.gamePhase,
            gameTeamPicking: req.body.gameTeamPicking
        });

        const insertResult = await insertRoom(room);
        return res.status(200).json({
            success: true,
            message: 'Insert room is successful',
            roomData: insertResult.roomData
        });
    } catch (err) {
        return res.status(400).json({
            success: false,
            message: err
        });
    }
}