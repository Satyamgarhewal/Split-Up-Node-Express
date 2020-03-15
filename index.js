const express = require('express');
const app = express();
const port = 3010;
const configureDb = require('./app/config/database');
const router = require('./app/config/router');

configureDb();
app.use(express.json());
app.use('/', router);
app.listen(port, function(req, res) {
  console.log('listening to port', port);
});
