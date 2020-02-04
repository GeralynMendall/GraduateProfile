require('dotenv/config')
const express = require('express');
const app = express();
const mongoose = require('mongoose');
const joi = require('joi');
const graduates = require('./routes/graduates');

app.use(express.json());

mongoose.connect(process.env.DATA_BASE, { useNewUrlParser: true, useUnifiedTopology: true })
    .then(() => console.log('Connected to MongoDB'))
    .catch(err => console.error('Can not connect to MongoDB ...'));

const port = process.env.PORT || 3000;
app.listen(port, () => console.log(`Listening on port ${port}...`))