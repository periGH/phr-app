const mongoose = require('mongoose');

const doctorVisitSchema = new mongoose.Schema({
  date: Date,
  doctorName: String,
  reason: String,
  notes: String
});

const DoctorVisit = mongoose.model('DoctorVisit', doctorVisitSchema);

module.exports = DoctorVisit;
