const task = require('../models/task');

const deleteTask = async (req, res) => {
  const taskId = req.params.id;
  try {
    const deletedTaskId = task.findByIdAndDelete(taskId);
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

module.exports = deleteTask;
