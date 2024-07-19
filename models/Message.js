const mongoose = require('mongoose');

const messageSchema = new mongoose.Schema({
    from: { type: String, required: true },
    room: { type: String, required: true },
    content: { type: String, required: true },
    createdAt: { type: Date, default: Date.now },
    updatedAt: { type: Date, default: Date.now },
});

const Message = mongoose.model('Message', messageSchema);

// Get message history for a room
async function getMessageHistory(room) {
    return await Message.find({ room: room });
}

// Send a message to a room
async function sendMessage(data) {
    const message = new Message(data);
    await message.save();
    return message;
}

module.exports = {
    sendMessage,
    getMessageHistory,
};