const express = require('express');
const router = express.Router();

// Mock data for medication schedules
let medicationList = [
  { id: 1, patientName: 'Jane Doe', medication: 'Medication A', dosage: '20mg', time: 'Mornings' },//can add a period like 1,3,6 months
  // Add more medication schedules as needed
];

// GET all medication schedules
router.get('/', (req, res) => {
  res.json(medicationList);
});

// POST a new medication schedule
router.post('/', (req, res) => {
  const newSchedule = { ...req.body, id: Date.now() }; // Simplified example
  medicationList.push(newSchedule);
  res.status(201).send(newSchedule);
});

// PUT (update) a medication schedule by id
router.put('/:id', (req, res) => {
  const { id } = req.params;
  const index = medicationList.findIndex(schedule => schedule.id === Number(id));
  if (index !== -1) {
    medicationList[index] = { ...medicationList[index], ...req.body };
    res.send(medicationList[index]);
  } else {
    res.status(404).send('Medication list not found');
  }
});

// DELETE a medication schedule by id
router.delete('/:id', (req, res) => {
  const { id } = req.params;
  medicationList = medicationList.filter(schedule => schedule.id !== Number(id));
  res.status(204).send();
});

// Export the router
module.exports = router;
