const express = require('express');
const router = express.Router();
const { createUser, findUserByUsername, findUserById, updateUserPassword, deleteUser } = require('../models/User');

// Create a User
router.post('/user', async (req, res) => {
  try {
    const user = await createUser(req.body);
    res.status(201).json(user);
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
});

// Read a User by username
router.get('/user/:username', async (req, res) => {
  try {
    const user = await findUserByUsername(req.params.username);
    if (user == null) {
      return res.status(404).json({ message: 'Cannot find user' });
    }
    res.json(user);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

// Read a User by _id
router.get('/user/:id', async (req, res) => {
  try {
    const user = await findUserById(req.params.id);
    if (user == null) {
      return res.status(404).json({ message: 'Cannot find user' });
    }
    res.json(user);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

// Update a User's password
router.put('/user/:username', async (req, res) => {
  try {
    const user = await updateUserPassword(req.params.username, req.body.password);
    if (user == null) {
      return res.status(404).json({ message: 'Cannot find user' });
    }
    res.json(user);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

// Delete a User
router.delete('/user/:username', async (req, res) => {
  try {
    const user = await deleteUser(req.params.username);
    if (user == null) {
      return res.status(404).json({ message: 'Cannot find user' });
    }
    res.json(user);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

module.exports = router;