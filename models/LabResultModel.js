const mongoose = require('mongoose');

const labResultSchema = new mongoose.Schema({
  date: Date,
  testType: String,
  result: String,
  notes: String,
});

const LabResult = mongoose.model('LabResult', labResultSchema);

module.exports = LabResult;
