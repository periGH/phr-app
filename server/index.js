
const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
require('dotenv').config();

const app = express();

app.use(express.json());
app.use(cors());


mongoose.connect(åprocess.env.MONGO_URI)
  .then(() => console.log('Connected to MongoDB'))
  .catch(err => console.error('Could not connect to MongoDB', err));


app.get('/', (req, res) => {
  res.send('Server is up and running!');
});

const port = process.env.PORT || 3001;
app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});


const healthRecordsRouter = require('./routes/healthRecordsRouter');
app.use('/api/healthrecords', healthRecordsRouter);

const appointmentsRouter = require('./routes/appointmentsRouter');
app.use('/api/appointments', appointmentsRouter);

const medicationsRouter = require('./routes/medicationsRouter');
app.use('/api/medications', medicationsRouter);

const doctorVisitsRouter = require('./routes/doctorVisitsRouter');
app.use('/api/doctorVisits', doctorVisitsRouter);

const labResultsRouter = require('./routes/labResultsRouter');
app.use('/api/labresults', labResultsRouter);

const usersRouter = require('./routes/usersRouter');
app.use('/api/users', usersRouter);


