const express = require('express');
const router = express.Router();
const { createRoom, findRoom, deleteRoom } = require('../models/Room');

// Create a Room
router.post('/room', async (req, res) => {
  try {
    const room = await createRoom(req.body);
    res.status(201).json(room);
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
});

module.exports = router;