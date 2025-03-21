const jwt = require('jsonwebtoken');

const verifyUser = async (req, res, next) => {
  try {
    let token = req.headers.authorization.split(' ')[1];
    // Verify Token
    const decoded = jwt.verify(token, process.env.SECRET_KEY);

    if (decoded) {
      req.user = decoded;
      next();
    } else {
      res.json('Something went wrong');
    }
  } catch (error) {
    res.status(401).json({ message: 'User is unauthorized' });
  }
};

module.exports = verifyUser;
