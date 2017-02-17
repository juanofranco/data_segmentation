'use strict';
const express = require('express')
const app = express()

app
  .use(express.static('public'))
  .get('/', (req, res) => {
    res.redirect('index.html');
  })
  .listen( 3000, () => console.log('Running on port 3000') );

