const express = require('express');
const mongoose = require('mongoose');
const path = require('path');
const bodyParser = require('body-parser');

const app = express();

app.use(express.json());

const items = require('./routes/api/items');
const teerResults = require('./routes/api/teerResults');
const login = require('./routes/api/login');
const results = require('./routes/api/results');

const db = require('./config/keys').mongoURI;

mongoose
  .connect(db)
  .then(() => console.log('Mongo DB connected...'))
  .catch(err => console.log(err));

// Use Routes
app.use('/api/items', items);
app.use('/api/login', login);
app.use('/api/results', results);
app.use('/api/teerResults', teerResults);

app.use(express.static('build'));

app.get('*', (req, res) => {
  res.sendFile(path.resolve(__dirname, 'build', 'index.html'));
});

const port = process.env.PORT || 80;

app.listen(port, () => console.log(`Server started on port ${port}`));


