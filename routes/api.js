const express = require('express');
const router = express.Router();
const userRoutes = require('./userRoutes');
const roomRoutes = require('./roomRoutes');

router.use(userRoutes);
router.use(roomRoutes);

module.exports = router;