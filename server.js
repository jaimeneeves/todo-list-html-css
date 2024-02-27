const express = require('express');
const app = express();
const serveStatic = require('serve-static');

const client = '/';
const port = process.env.PORT || 3000;

app.use(serveStatic(__dirname + client));

app.listen(port,function(){
  console.log("http://localhost:" + port);
});

// npm install express --save