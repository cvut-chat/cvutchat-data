const mongoose = require('mongoose');

const roomSchema = new mongoose.Schema({
    name: { type: String, required: true },
    users : { type: Array, required: true },
    messages : { type: Array, required: true },
    createdAt : { type: Date, default: Date.now },
    updatedAt : { type: Date, default: Date.now },
});

const Room = mongoose.model('Room', roomSchema);

// Create a Room
async function createRoom(roomData) {
    const room = new Room(roomData);
    await room.save();
    return room;
}

// Get list of rooms
async function getRooms() {
    return await Room.find();
}

// Delete a Room
async function deleteRoom(id) {
    return await Room.findByIdAndDelete(id);
}

module.exports = {
    createRoom,
    getRooms,
    deleteRoom,
};