const Room = require('../../schema/Room');
const insertRoom = require('../model/room/insertRoom');

module.exports = async (req, res) => {
    try {
        const room = new Room({
            roomName: req.body.roomName,
            roomPassword: req.body.roomPassword,
            roomMode: req.body.roomMode,
            leader: req.body.leader,
            player: req.body.player,
            gamePhase: req.body.gamePhase,
            missionResult: req.body.missionResult,
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