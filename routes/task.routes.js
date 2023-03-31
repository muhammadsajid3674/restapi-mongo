const express = require("express");
const taskController = require("../controller/task.controller");

const taskRouter = express.Router();

taskRouter.get('/', (req, res) => {
    taskController.getTask().then(data => res.json(data));
})

taskRouter.post('/', (req, res) => {
    const { task } = req.body;
    console.log(task);
    task.createAt = Date.now();
    taskController.createTask(req.body.task).then(data => res.json(data))
})

taskRouter.put('/:id', (req, res) => {
    const { task } = req.body;
    const { id } = req.params;
    taskController.updateTask({ _id: id }, task).then((data) => res.json(data))
})

taskRouter.delete('/:id', (req, res) => {
    const { id } = req.params;
    taskController.deleteTask(id).then(data => res.json(data))
})

module.exports = taskRouter;