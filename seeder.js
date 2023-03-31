const { connect } = require('./config/db.config');
const tasks = require('./data/tasks.data');
const { Task } = require('./model/task.model');

require('dotenv').config();
connect();

const importData = async () => {
    try {
        await Task.deleteMany();
        await Task.insertMany(tasks);
        console.log('Data imported!');
        process.exit();
    } catch (error) {
        console.log(error);
        process.exit(1);
    }
}
const destroyData = async () => {
    try {
        await Task.deleteMany();
        console.log('Data Destroyed!');
        process.exit();
    } catch (error) {
        console.log(error);
        process.exit(1);
    }
}

if (process.argv[2] == '-d') {
    destroyData();
} else {
    importData();
}