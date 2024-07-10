const express = require('express');
const router = express.Router();

const authRoutes = require('./authRoutes');
// const historyRoutes = require('./historyRoutes');

router.use('/auth', authRoutes);
// router.use('/history', historyRoutes);

module.exports = router;