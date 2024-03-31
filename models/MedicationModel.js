const mongoose = require('mongoose');

const medicationSchema = new mongoose.Schema({
  name: String,
  dosage: String,
  frequency: String
  // Add other fields as needed
});

const Medication = mongoose.model('Medication', medicationSchema);

module.exports = Medication;
