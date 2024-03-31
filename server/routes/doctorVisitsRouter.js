const express = require('express');
const router = express.Router();

// Mock data for doctor visits
// let doctorVisits = [
//   // Example visit
//   { id: 1, date: '2023-03-21', doctorName: 'Dr. Smith', reason: 'Routine checkup', notes: 'Next appointment in 6 months' },
//   // Add more visits as needed
// ];

// // GET all doctor visits
// router.get('/', (req, res) => {
//   res.json(doctorVisits);
// });

// // POST a new doctor visit
// router.post('/', (req, res) => {
//   const newVisit = { ...req.body, id: Date.now() }; // Simplified example
//   doctorVisits.push(newVisit);
//   res.status(201).send(newVisit);
// });

// // PUT (update) a doctor visit by id
// router.put('/:id', (req, res) => {
//   const { id } = req.params;
//   const index = doctorVisits.findIndex(visit => visit.id === Number(id));
//   if (index !== -1) {
//     doctorVisits[index] = { ...doctorVisits[index], ...req.body };
//     res.send(doctorVisits[index]);
//   } else {
//     res.status(404).send('Doctor visit not found');
//   }
// });

// // DELETE a doctor visit by id
// router.delete('/:id', (req, res) => {
//   const { id } = req.params;
//   doctorVisits = doctorVisits.filter(visit => visit.id !== Number(id));
//   res.status(204).send();
// });

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
