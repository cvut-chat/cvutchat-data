const express = require('express');
const router = express.Router();
const { createRoom, getRooms, deleteRoom } = require('../models/Room');
const { sendMessage, getMessageHistory } = require('../models/Message');

// Create a Room
router.post('/rooms', async (req, res) => {
  try {
    const room = await createRoom(req.body);
    res.status(201).json(room);
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
});

// Get list of rooms
router.get('/rooms', async (req, res) => {
  try {
    const rooms = await getRooms();
    res.json(rooms);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

// Get message history for a room
router.get('/rooms/:id/messages', async (req, res) => {
  try {
    const messages = await getMessageHistory(req.params.id);
    res.json(messages);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

// Send a message to a room
router.post('/rooms/:id/messages/send', async (req, res) => {
  try {
    req.body.room = req.params.id;
    const room = await sendMessage(req.body);
    res.json(room);
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
});

// Delete a Room
router.delete('/rooms/:id', async (req, res) => {
  try {
    await deleteRoom(req.params.id);
    res.json({ message: 'Room deleted' });
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

module.exports = router;