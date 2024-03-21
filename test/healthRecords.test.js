// healthRecords.test.js
const request = require('supertest');
const express = require('express');
const healthRecordsRouter = require('../server/routes/healthRecordsRouter');

const app = express();
app.use(express.json());
app.use('/api/healthrecords', healthRecordsRouter);

describe('GET /api/healthrecords', () => {
  it('should return all health records', async () => {
    const res = await request(app).get('/api/healthrecords');
    expect(res.statusCode).toEqual(200);
    expect(res.body).toBeInstanceOf(Array);
    // Further checks can be added here depending on the structure of your data
  });
});
