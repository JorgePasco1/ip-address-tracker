const express = require('express');
const cors = require('cors')
const locationController = require('./controllers/locationController');

const app = express();
app.use(cors())

app.get('/', (req, res) => {
  res.send('Hello World!');
});

app.use('/api/v1/location', locationController);

module.exports = app;
