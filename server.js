'use strict';

const express = require('express');
const app = express();
const path = require('path');
const port = process.env.PORT || 3000;

app.use('*', (req, res) => {
  res.sendFile(path.resolve(_dirname, 'public', 'index.html'));
});

app.listen(port, () => {
  console.log('port listening on ' + port);
});