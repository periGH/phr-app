const express = require('express');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const router = express.Router();

const User = require('../../models/UserModel');

router.post('/signup', async (req, res) => {
  const { username, password, email } = req.body;

  try {
    // check if the user already exists
    const existingUser = await User.findOne({ username });
    if (existingUser) {
      return res.status(400).send('User already exists');
    }

    // Hash the password
    const salt = await bcrypt.genSalt(10);
    const passwordHash = await bcrypt.hash(password, salt);

    // Create a new user instance and save it to the database
    const newUser = new User({ username, email, passwordHash });
    await newUser.save();

    // Respond with success
    res.status(201).send({ message: 'User created', user: newUser });
  } catch (error) {
    // Handle errors
    res.status(500).send(error.message);
  }
});


// POST login
router.post('/login', async (req, res) => {
  const { username, password } = req.body;
  const user = await User.findOne({ username });
  if (!user) return res.status(400).send('User not found');

  const isMatch = await bcrypt.compare(password, user.passwordHash);
  if (!isMatch) return res.status(400).send('Invalid credentials');

  // Generate token (JWT)
  const token = jwt.sign({ userId: user.id }, process.env.JWT_SECRET, { expiresIn: '1h' });

  // res.send({ message: 'Logged in successfully', token });
  res.send({ 
    message: 'Logged in successfully', 
    token, 
    user: { id: user.id, username: user.username, email: user.email } // Send back user data as needed
  });
  
});


// GET user profile (Protected Route)
router.get('/profile', (req, res) => {
  // Authentication logic to verify token
  const userId = req.userId; // This would be set by your authentication middleware
  const user = users.find(user => user.id === userId);
  if (!user) return res.status(404).send('User not found');
  
  res.send({ username: user.username, email: user.email });
});

// Export the router
module.exports = router;
