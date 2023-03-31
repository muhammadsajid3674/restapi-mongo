const express = require('express');
const taskRouter = require('./routes/task.routes');
require('dotenv').config();

const app = express();
const PORT = process.env.PORT || 8080;

app.use(express.json())

app.get('/', (req, res) => {
    res.send("<h1>API WORKS!</h2>")
})

app.use('/api/todo', taskRouter)

app.listen(PORT, () => console.log(`Server is running on: http://localhost:${PORT}`))