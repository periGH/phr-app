const express = require('express');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const router = express.Router();

// Mock user data
// let users = [
//   // Example user format, replace with actual user data and storage mechanism
//   { id: 1, username: 'user1', passwordHash: 'somehashedpassword', email: 'user1@example.com' },
// ];

// // POST sign up a new user
// router.post('/signup', async (req, res) => {
//   const { username, password, email } = req.body;
//   // Here you should check if the user already exists and hash the password
//   const salt = await bcrypt.genSalt(10);
//   const passwordHash = await bcrypt.hash(password, salt);
//   const newUser = { id: Date.now(), username, passwordHash, email };
//   users.push(newUser);
//   res.status(201).send({ message: 'User created', userId: newUser.id });
// });

const User = require('../../models/UserModel');

router.post('/signup', async (req, res) => {
  const { username, password, email } = req.body;

  try {
    // Here you should check if the user already exists
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
  const user = users.find(user => user.username === username);
  if (!user) return res.status(400).send('User not found');

  const isMatch = await bcrypt.compare(password, user.passwordHash);
  if (!isMatch) return res.status(400).send('Invalid credentials');

  // Generate token (JWT)
  //const token = jwt.sign({ userId: user.id }, 'your_jwt_secret', { expiresIn: '1h' });
  const token = jwt.sign({ userId: user.id }, process.env.JWT_SECRET, { expiresIn: '1h' });
  res.send({ message: 'Logged in successfully', token });
});

// GET user profile (Protected Route)
router.get('/profile', (req, res) => {
  // Authentication logic to verify token
  // For demonstration, assuming user is authenticated
  const userId = req.userId; // This would be set by your authentication middleware
  const user = users.find(user => user.id === userId);
  if (!user) return res.status(404).send('User not found');
  
  res.send({ username: user.username, email: user.email });
});

// Export the router
module.exports = router;
