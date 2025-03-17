const bcrypt = require('bcrypt');
const User = require('../models/user');
const jwt = require('jsonwebtoken');
const registerUser = async (req, res) => {
  const { name, email, password } = req.body;
  //hashed password
  const salt = await bcrypt.genSalt(10);
  const hassedPassword = await bcrypt.hash(password, salt);
  //Finde if user exists
  const userExist = await User.findOne({ email: email });
  if (userExist) {
    res.json({ message: 'User already exist on this email.' });
  }
  //Create new User
  const user = await User.create({
    name,
    email,
    password: hassedPassword,
  });
  if (user) {
    res.status(201).json({
      _id: user._id,
      name: user.name,
      email: user.email,
      password: user.password,
    });
  } else {
    res.status(400);
    throw new Error('Invalid user data');
  }
};

const loginUser = async (req, res) => {
  const { name, email, password } = req.body;
  if (!name || !email || !password) {
    res.send('Please fill up all required fields');
    return;
  }
  const user = await User.findOne({ email });

  //Create jwt token
  const token = jwt.sign({ id: user._id }, process.env.SECRET_KEY, {
    expiresIn: '12h',
  });
  if (user) {
    const data = {
      _id: user._id,
      name: user.name,
      email: user.email,
      token: token,
    };
    res.status(200).json({ data, message: 'User login Successfully!' });
  } else {
    throw new Error('Invalid Credentials');
  }
};

module.exports = { registerUser, loginUser };
