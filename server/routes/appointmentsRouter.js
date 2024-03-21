const express = require('express');
const router = express.Router();

// Mock data for appointments
let appointments = [
  { id: 1, patientName: 'John Doe', time: '2023-01-01T10:00:00Z' },
  // Add more appointments as needed
];

// GET all appointments
router.get('/', (req, res) => {
  res.json(appointments);
});

// POST a new appointment
router.post('/', (req, res) => {
  const newAppointment = { ...req.body, id: Date.now() }; // Simplified example
  appointments.push(newAppointment);
  res.status(201).send(newAppointment);
});

// PUT (update) an appointment by id
router.put('/:id', (req, res) => {
  const { id } = req.params;
  const index = appointments.findIndex(appt => appt.id === Number(id));
  if (index !== -1) {
    appointments[index] = { ...appointments[index], ...req.body };
    res.send(appointments[index]);
  } else {
    res.status(404).send('Appointment not found');
  }
});

// DELETE an appointment by id
router.delete('/:id', (req, res) => {
  const { id } = req.params;
  appointments = appointments.filter(appt => appt.id !== Number(id));
  res.status(204).send();
});

// Export the router
module.exports = router;
