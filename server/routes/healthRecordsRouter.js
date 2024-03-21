const express = require('express');
const router = express.Router();

// Mock data
let healthRecords = [
  { id: 1, description: 'Annual Physical Exam', date: '2023-01-01' },
  // Add more records as needed
];

// GET all health records
router.get('/', (req, res) => {
  res.json(healthRecords);
});

// POST a new health record
router.post('/', (req, res) => {
    const newRecord = { ...req.body, id: Date.now() }; // Simplified example
    healthRecords.push(newRecord);
    res.status(201).send(newRecord);
  });
  
  // PUT (update) a health record by id
  router.put('/:id', (req, res) => {
    const { id } = req.params;
    let recordIndex = healthRecords.findIndex(record => record.id === Number(id));
    if (recordIndex > -1) {
      healthRecords[recordIndex] = { ...healthRecords[recordIndex], ...req.body };
      res.send(healthRecords[recordIndex]);
    } else {
      res.status(404).send('Record not found');
    }
  });
  
  // DELETE a health record by id
  router.delete('/:id', (req, res) => {
    const { id } = req.params;
    healthRecords = healthRecords.filter(record => record.id !== Number(id));
    res.status(204).send();
  });

// Export the router
module.exports = router;
