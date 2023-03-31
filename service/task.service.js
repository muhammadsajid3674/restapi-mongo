const taskRepository = require("../repository/task.repository");

class TaskService {
    constructor() { }

    async getTask() {
        return await taskRepository.getTask();
    }

    async createTask(task) {
        return await taskRepository.createTask(task)
    }

    async updateTask(query, task) {
        return await taskRepository.updateTask(query, task)
    }

    async deleteTask(taskId) {
        return await taskRepository.deleteTask(taskId)
    }
}

module.exports = new TaskService();