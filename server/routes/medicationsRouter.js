const express = require('express');
const router = express.Router();

// Mock data for medication schedules
// let medicationList = [
//   { id: 1, patientName: 'Jane Doe', medication: 'Medication A', dosage: '20mg', time: 'Mornings' },//can add a period like 1,3,6 months
//   // Add more medication schedules as needed
// ];

// // GET all medication schedules
// router.get('/', (req, res) => {
//   res.json(medicationList);
// });

// // POST a new medication schedule
// router.post('/', (req, res) => {
//   const newSchedule = { ...req.body, id: Date.now() }; // Simplified example
//   medicationList.push(newSchedule);
//   res.status(201).send(newSchedule);
// });

// // PUT (update) a medication schedule by id
// router.put('/:id', (req, res) => {
//   const { id } = req.params;
//   const index = medicationList.findIndex(schedule => schedule.id === Number(id));
//   if (index !== -1) {
//     medicationList[index] = { ...medicationList[index], ...req.body };
//     res.send(medicationList[index]);
//   } else {
//     res.status(404).send('Medication list not found');
//   }
// });

// // DELETE a medication schedule by id
// router.delete('/:id', (req, res) => {
//   const { id } = req.params;
//   medicationList = medicationList.filter(schedule => schedule.id !== Number(id));
//   res.status(204).send();
// });


// UPDATE THIS SECTION AFTER POST OPERATION WORKS FOR MONGODB ATLAS CLUSTER: 
// POSt operation above is correct 

const Medication = require('../../models/MedicationModel'); 

// POST a new medication schedule
router.post('/', async (req, res) => {
  try {
    const newMedication = await Medication.create(req.body); // Create new document in MongoDB
    res.status(201).send(newMedication);
  } catch (error) {
    res.status(400).send(error);
  }
});

// GET request - retrieve actual medications stored in MongoDB
router.get('/', async (req, res) => {
  try {
    const medications = await Medication.find(); // Retrieve all documents from MongoDB
    res.json(medications);
  } catch (error) {
    res.status(500).send(error);
  }
});

// PUT request - Update to find a medication by ID and update it in the database
router.put('/:id', async (req, res) => {
  try {
    const updatedMedication = await Medication.findByIdAndUpdate(
      req.params.id, 
      req.body, 
      { new: true } // Return the updated object
    );
    if (!updatedMedication) {
      return res.status(404).send('Medication not found');
    }
    res.send(updatedMedication);
  } catch (error) {
    res.status(400).send(error);
  }
});

// DELETE request - Change to remove a medication document from MongoDB using the provided ID.
router.delete('/:id', async (req, res) => {
  try {
    const deletedMedication = await Medication.findByIdAndDelete(req.params.id);
    if (!deletedMedication) {
      return res.status(404).send('Medication not found');
    }
    res.status(204).send(); // No content to send back
  } catch (error) {
    res.status(400).send(error);
  }
});

// Export the router
module.exports = router;
