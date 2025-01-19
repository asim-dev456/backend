const express = require('express');
const cors = require('cors');

// config cors
app.use(
  cors({
    origin: process.env.CORS_ORIGN,
    credentials: true,
  })
);
app.use(express.json({ limit: '16kb' }));
app.use(express.urlencoded({ extended: true }));
const app = express();
app.use(cookieParser());
