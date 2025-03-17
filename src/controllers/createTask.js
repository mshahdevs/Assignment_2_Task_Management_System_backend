const taskSchema = require('../models/task');
const createTask = async (req, res) => {
  const { title } = req.body;
  const newTask = await taskSchema.create({
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

module.exports = { createTask };
