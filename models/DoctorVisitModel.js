const mongoose = require('mongoose');

const doctorVisitSchema = new mongoose.Schema({
  date: Date,
  doctorName: String,
  reason: String,
  notes: String
  // Add other fields as needed
});

const DoctorVisit = mongoose.model('DoctorVisit', doctorVisitSchema);

module.exports = DoctorVisit;
