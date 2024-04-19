const express = require('express');
const router = express.Router();

const DoctorVisit = require('../../models/DoctorVisitModel'); 

router.post('/', async (req, res) => {
  try {
    const newDoctorVisit = await DoctorVisit.create(req.body); // Create new document in MongoDB
    res.status(201).send(newDoctorVisit);
  } catch (error) {
    res.status(400).send(error);
  }
});

router.get('/', async (req, res) => {
  try {
    const doctorVisits = await DoctorVisit.find(); // Retrieve all documents from MongoDB
    res.json(doctorVisits);
  } catch (error) {
    res.status(500).send(error);
  }
});

router.put('/:id', async (req, res) => {
  try {
    const updatedDoctorVisit = await DoctorVisit.findByIdAndUpdate(
      req.params.id, 
      req.body, 
      { new: true } // Return the updated object
    );
    if (!updatedDoctorVisit) {
      return res.status(404).send('DoctorVisit not found');
    }
    res.send(updatedDoctorVisit);
  } catch (error) {
    res.status(400).send(error);
  }
});

router.delete('/:id', async (req, res) => {
  try {
    const deletedDoctorVisit = await DoctorVisit.findByIdAndDelete(req.params.id);
    if (!deletedDoctorVisit) {
      return res.status(404).send('DoctorVisit not found');
    }
    res.status(204).send(); // No content to send back
  } catch (error) {
    res.status(400).send(error);
  }
});

// Export the router
module.exports = router;
