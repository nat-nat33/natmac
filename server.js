'use strict';

const express = require('express');
const app = express();
const path = require('path');
const PORT = process.env.PORT || 3000;

app.get('*', function(req, res){
  res.sendFile('./public/index.html',
    {
      root  : __dirname
    }
  );
});

app.listen(PORT, () => {
  console.log(`server is running on port ${PORT}`);
});