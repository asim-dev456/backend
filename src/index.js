const express = require('express');
const { dbconnection } = require('./DB/connection');
require('dotenv').config();
const app = express();

app.listen(3000 || process.env.PORT);

dbconnection();
