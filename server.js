require('dotenv').config();
const express = require('express');
const bodyParser = require('body-parser');
const request = require('request');
const rp = require('request-promise');
const path = require('path');
// var items = require('../database-mongo');

const app = express();
const BASE_URL = process.env.BASE_URL;
const TOKEN = process.env.OAUTH_TOKEN;

app.use('/', express.static(path.join(__dirname, './dist')));

app.get('/genres', (req, res) => {
  const options = {
    uri: `${BASE_URL}/recommendations/available-genre-seeds`,
    headers: {
      'User-Agent': 'Request-Promise',
      'Authorization': `Bearer ${TOKEN}`
    },
    json: true,
  };
  rp(options)
    .then((data) => {
      res.send(data.genres);
    })
    .catch(err => console.log(err));
});


app.listen(3000, () => console.log('listening on port 3000'));
