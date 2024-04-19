const express = require('express');
const router = express.Router();

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
