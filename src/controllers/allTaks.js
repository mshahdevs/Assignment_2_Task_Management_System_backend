const taskSchema = require('../models/task');
const allTasks = async (req, res) => {
  try {
    // const userId = req.user;
    // const { _id } = userId;

    const allTasks = await taskSchema.find();

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

module.exports = allTasks;
