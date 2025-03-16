const express = require('express');
const verifyUser = require('../middleware/userMiddleware');
const { createTask } = require('../controllers/createTask');
const router = express.Router();

router.post('/create-task', verifyUser, createTask);

module.exports = router;
