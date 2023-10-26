const express = require('express');
const { resolve } = require('path');

const data = require('./pages/data.js');

const app = express();
const port = 3010;

app.use(express.static('static'));

app.get('/', (req, res) => {
  res.sendFile(resolve(__dirname, 'pages/index.html'));
});

app.get('/api/players/:playername', (req, res) => {
  //console.log(req.params.playername);
  const star_name = req.params.playername.toLowerCase();
  if (data[star_name]) {
    res.json(data[star_name]);
  } else {
    res.json({message:"no player found"});
  }
  // res.status(200).json(data);
});

app.get('/about', (req, res) => {
  res.sendFile(resolve(__dirname, 'pages/about.html'));
});

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`);
});
