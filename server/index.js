// const express = require('express');
// const app = express();

// app.get('/', (req, res) => {
//   res.send('Hello from the server!');
// });

// const PORT = process.env.PORT || 3000;
// app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
// 

const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
require('dotenv').config();

const app = express();

app.use(express.json());
app.use(cors());

// Example connection to MongoDB
// mongoose.connect(process.env.MONGO_URI, { useNewUrlParser: true, useUnifiedTopology: true })
//   .then(() => console.log('Connected to MongoDB'))
//   .catch(err => console.error('Could not connect to MongoDB', err));
mongoose.connect(process.env.MONGO_URI)
  .then(() => console.log('Connected to MongoDB'))
  .catch(err => console.error('Could not connect to MongoDB', err));


// Example route
app.get('/', (req, res) => {
  res.send('Server is up and running!');
});

const port = process.env.PORT || 3001;
app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});

// Could not connect to MongoDB MongooseError: The `uri` parameter to `openUri()` must be a string, got "undefined". Make sure the first parameter to `mongoose.connect()` or `mongoose.createConnection()` is a string.
//     at NativeConnection.createClient (/Users/perihill/Library/Mobile Documents/com~apple~CloudDocs/Documents/GeorgiaTech/CS6440_Health_Informatics/Practicum Project/phr-app/node_modules/mongoose/lib/drivers/node-mongodb-native/connection.js:206:11)
//     at NativeConnection.openUri (/Users/perihill/Library/Mobile Documents/com~apple~CloudDocs/Documents/GeorgiaTech/CS6440_Health_Informatics/Practicum Project/phr-app/node_modules/mongoose/lib/connection.js:801:34)
//     at Mongoose.connect (/Users/perihill/Library/Mobile Documents/com~apple~CloudDocs/Documents/GeorgiaTech/CS6440_Health_Informatics/Practicum Project/phr-app/node_modules/mongoose/lib/mongoose.js:404:15)
//     at Object.<anonymous> (/Users/perihill/Library/Mobile Documents/com~apple~CloudDocs/Documents/GeorgiaTech/CS6440_Health_Informatics/Practicum Project/phr-app/server/index.js:23:10)

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


