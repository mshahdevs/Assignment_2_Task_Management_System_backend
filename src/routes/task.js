const express = require('express');
const verifyUser = require('../middleware/userMiddleware');
const { createTask, allTasks, deleteTask } = require('../controllers/task.js');
const router = express.Router();
//Create task
router.post('/create-task', verifyUser, createTask);
//get All tasks
router.get('/', verifyUser, allTasks);
//Delete tasks
router.delete('/task/:id', verifyUser, deleteTask);

module.exports = router;
