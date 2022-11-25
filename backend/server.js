const express = require('express');
const colors = require('colors');
const cors = require('cors');
const dotenv = require('dotenv').config()
const connectDB = require('./config/dp');
const port = process.env.PORT || '5000';

connectDB();

const app = express();

app.use(express.urlencoded({ extended: false }));
app.use(express.json());
app.use(cors());
app.use('/api/tasks', require('./routes/taskRoute'));



app.get('/', (req, res) => {
  const task =  ['bassem 12',' ','maher'] ;
  res.status(200).json(task);
});

app.listen(port, (err) => {
  if (err) throw err;
  console.log('Server listening on port', port);
});
