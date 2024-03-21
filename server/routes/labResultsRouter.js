const express = require('express');
const router = express.Router();

// Mock data for lab results
let labResults = [
  { id: 1, patientName: 'John Doe', testName: 'Blood Test', result: 'Normal', date: '2023-01-02' },
  // Add more lab results as needed
];

// GET all lab results
router.get('/', (req, res) => {
  res.json(labResults);
});

// POST a new lab result
router.post('/', (req, res) => {
  const newLabResult = { ...req.body, id: Date.now() };
  labResults.push(newLabResult);
  res.status(201).send(newLabResult);
});

// PUT (update) a lab result by id
router.put('/:id', (req, res) => {
  const { id } = req.params;
  const index = labResults.findIndex(result => result.id === Number(id));
  if (index !== -1) {
    labResults[index] = { ...labResults[index], ...req.body };
    res.send(labResults[index]);
  } else {
    res.status(404).send('Lab Result not found');
  }
});

// DELETE a lab result by id
router.delete('/:id', (req, res) => {
  const { id } = req.params;
  labResults = labResults.filter(result => result.id !== Number(id));
  res.status(204).send();
});

// Export the router
module.exports = router;
