const express = require('express');
const verifyUser = require('../middleware/userMiddleware');
const { createTask } = require('../controllers/createTask');
const allTasks = require('../controllers/allTaks');
const deleteTask = require('../controllers/deleteTask');
const router = express.Router();
//Create task
router.post('/create-task', verifyUser, createTask);
//get All tasks
router.get('/', verifyUser, allTasks);
//Delete tasks
router.delete('/task/:id', verifyUser, deleteTask);

module.exports = router;
