const express = require('express');
const { dbconnection } = require('./DB/connection');
const cookieParser = require('cookie-parser');
require('dotenv').config();
const app = express();
app.use(cookieParser());
app.listen(3000 || process.env.PORT);

dbconnection();
