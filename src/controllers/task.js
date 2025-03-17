const taskModel = require('../models/task.js');

//Create task
const createTask = async (req, res) => {
  const { title } = req.body;
  const newTask = await taskModel.create({
    title: title,
  });
  if (newTask) {
    res.status(201).json({
      message: 'Task created successfully',
      _id: newTask._id,
      title: newTask.title,
    });
  } else {
    res.status(400).json({ message: "task didn't created or added!" });
  }
};

// Show all tasks
const allTasks = async (req, res) => {
  try {
    // const userId = req.user;
    // const { _id } = userId;

    const allTasks = await taskModel.find();

    const extractallTasks = allTasks.map((task) => {
      return {
        _id: task._id,
        title: task.title,
      };
    });
    res.status(200).json({ message: 'all tasks', tasks: extractallTasks });
  } catch (error) {
    res.status(401).json('You are unauthorized');
    console.log(error);
  }
};

//Delete task
const deleteTask = async (req, res) => {
  const taskId = req.params.id;
  // console.log('from req.body =>taskId', taskId);
  try {
    const deletedTaskId = await taskModel.findByIdAndDelete(taskId);
    // console.log('from database => deletedtaskId', deletedTaskId);
    if (deletedTaskId) {
      res
        .status(200)
        .json({ message: 'Task deleted successfully🎉', deletedTaskId });
    } else {
      res.status(404).json({ message: "task not found.Couldn't delete" });
    }
    // const taskId = await task.findById({ _id: taskId });
  } catch (error) {
    console.log(error.message);
    res.json(error.message);
  }
};

module.exports = { createTask, allTasks, deleteTask };
