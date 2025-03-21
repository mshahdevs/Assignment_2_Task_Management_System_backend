const express = require('express');
const dotenv = require('dotenv').config();
const connectDB = require('./src/config/db.js');
const userRoutes = require('./src/routes/user.js');
const taskRoutes = require('./src/routes/task.js');
const app = express();

//Middleware
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

//connect MongoDB
connectDB();
//routes
app.get('/', (req, res) => {
  res.send('server started');
});

// User Routes
app.use('/api/auth', userRoutes);

//Task Routes
app.use('/api/tasks', taskRoutes);

//port
const port = process.env.PORT;
app.listen(port, () =>
  console.log(`server started on http://localhost:${port}`)
);
