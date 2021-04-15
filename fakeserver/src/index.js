const express = require('express');
const cors = require('cors');
const data = require('./db');

//express app
const app = express();

//express middlewares
app.use(express.json());
app.use(cors());

//express routes
app.get('/data', async (req, res) => {
  try {
    res.status(200).send(data);
    console.log('requested');
  } catch (error) {
    console.log('error: ', error);
  }
});

app.use('/res', express.static('./public'));

app.listen('3001', () => console.log(`Server Started`));
