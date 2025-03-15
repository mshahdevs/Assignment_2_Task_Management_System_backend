const express = require('express');
const dotenv = require('dotenv').config();
const connectDB = require('./src/config/db.js');
const userRoutes = require('./src/routes/userRoutes.js');
const verifyUser = require('./src/middleware/userMiddleware.js');
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
//verify user routes
app.get('/verify', verifyUser, (req, res) => {
  res.json('Get me on verify routes');
});
const port = process.env.PORT;
app.listen(port, () =>
  console.log(`server started on http://localhost:${port}`)
);
