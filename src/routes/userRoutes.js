const express = require('express');
const { registerUser, loginUser } = require('../controllers/userControllers');
const router = express.Router();

//Reqister Routes
// api/auth/reqister
router.post('/register', registerUser);

//Reqister Routes
// api/auth/login
router.post('/login', loginUser);

module.exports = router;
