const express = require('express');
const { registerUser, loginUser, getUser } = require('../controllers/authController');
const router = express.Router();

router.post('/register', registerUser);
router.post('/login', loginUser);
router.get('/:id', getUser);

module.exports = router;