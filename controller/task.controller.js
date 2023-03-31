const logger = require("../logger/api.logger");
const taskService = require("../service/task.service");

class TodoController {

    async getTask() {
        logger.info('Controller: getTask');
        return await taskService.getTask();
    }

    async createTask(task) {
        logger.info('Controller: createTask', task);
        return await taskService.createTask(task);
    }

    async updateTask(query, task) {
        logger.info('Controller: updateTask', { query, task });
        return await taskService.updateTask(query, task);
    }

    async deleteTask(taskId) {
        logger.info('Controller: deleteTask', taskId);
        return await taskService.deleteTask(taskId);
    }

}

module.exports = new TodoController();