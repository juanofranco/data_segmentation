'use strict';
const express = require('express')
const app = express()

app
  .use(express.static('public'))
  .get('/', (req, res) => {
    res.redirect('data.html');
  })
  .listen( 3000, () => console.log('Runing on port 3000') );

