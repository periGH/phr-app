const express = require('express');
const router = express.Router();

// Mock data for doctor visits
let doctorVisits = [
  // Example visit
  { id: 1, date: '2023-03-21', doctorName: 'Dr. Smith', reason: 'Routine checkup', notes: 'Next appointment in 6 months' },
  // Add more visits as needed
];

// GET all doctor visits
router.get('/', (req, res) => {
  res.json(doctorVisits);
});

// POST a new doctor visit
router.post('/', (req, res) => {
  const newVisit = { ...req.body, id: Date.now() }; // Simplified example
  doctorVisits.push(newVisit);
  res.status(201).send(newVisit);
});

// PUT (update) a doctor visit by id
router.put('/:id', (req, res) => {
  const { id } = req.params;
  const index = doctorVisits.findIndex(visit => visit.id === Number(id));
  if (index !== -1) {
    doctorVisits[index] = { ...doctorVisits[index], ...req.body };
    res.send(doctorVisits[index]);
  } else {
    res.status(404).send('Doctor visit not found');
  }
});

// DELETE a doctor visit by id
router.delete('/:id', (req, res) => {
  const { id } = req.params;
  doctorVisits = doctorVisits.filter(visit => visit.id !== Number(id));
  res.status(204).send();
});

// Export the router
module.exports = router;
