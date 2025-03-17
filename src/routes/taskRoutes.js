const express = require('express');
const verifyUser = require('../middleware/userMiddleware');
const { createTask } = require('../controllers/createTask');
const allTasks = require('../controllers/allTaks');
const router = express.Router();
//Create task
router.post('/create-task', verifyUser, createTask);

//get All tasks
router.get('/', verifyUser, allTasks);

module.exports = router;
