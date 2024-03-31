const express = require('express');
const router = express.Router();

// // Mock data for lab results
// let labResults = [
//   { id: 1, patientName: 'John Doe', testName: 'Blood Test', result: 'Normal', date: '2023-01-02' },
//   // Add more lab results as needed
// ];

// // GET all lab results
// router.get('/', (req, res) => {
//   res.json(labResults);
// });

// // POST a new lab result
// router.post('/', (req, res) => {
//   const newLabResult = { ...req.body, id: Date.now() };
//   labResults.push(newLabResult);
//   res.status(201).send(newLabResult);
// });

// // PUT (update) a lab result by id
// router.put('/:id', (req, res) => {
//   const { id } = req.params;
//   const index = labResults.findIndex(result => result.id === Number(id));
//   if (index !== -1) {
//     labResults[index] = { ...labResults[index], ...req.body };
//     res.send(labResults[index]);
//   } else {
//     res.status(404).send('Lab Result not found');
//   }
// });

// // DELETE a lab result by id
// router.delete('/:id', (req, res) => {
//   const { id } = req.params;
//   labResults = labResults.filter(result => result.id !== Number(id));
//   res.status(204).send();
// });

const LabResult = require('../../models/LabResultModel'); 

// POST a new medication schedule
router.post('/', async (req, res) => {
  try {
    const newLabResult = await LabResult.create(req.body); // Create new document in MongoDB
    res.status(201).send(newLabResult);
  } catch (error) {
    res.status(400).send(error);
  }
});

// GET request - retrieve actual medications stored in MongoDB
router.get('/', async (req, res) => {
  try {
    const labResults = await LabResult.find(); // Retrieve all documents from MongoDB
    res.json(labResults);
  } catch (error) {
    res.status(500).send(error);
  }
});

// PUT request - Update to find a medication by ID and update it in the database
router.put('/:id', async (req, res) => {
  try {
    const updatedLabResult = await LabResult.findByIdAndUpdate(
      req.params.id, 
      req.body, 
      { new: true } // Return the updated object
    );
    if (!updatedLabResult) {
      return res.status(404).send('LabResult not found');
    }
    res.send(updatedLabResult);
  } catch (error) {
    res.status(400).send(error);
  }
});

// DELETE request - Change to remove a medication document from MongoDB using the provided ID.
router.delete('/:id', async (req, res) => {
  try {
    const deletedLabResult = await LabResult.findByIdAndDelete(req.params.id);
    if (!deletedLabResult) {
      return res.status(404).send('LabResult not found');
    }
    res.status(204).send(); // No content to send back
  } catch (error) {
    res.status(400).send(error);
  }
});

// Export the router
module.exports = router;
