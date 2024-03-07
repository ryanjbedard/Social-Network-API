const express = require('express');
constdb = require('./config/connection');
const routes = require('./routes');
const mongoose = require('mongoose');

const PORT = process.env.PORT || 3001;
const app = express();

const cwd = process.cwd();
app.use(express.urlencoded({ extended: true }));

mongoose.connection.once('open', () => {
    console.log('Connected to MongoDB');
});

app.listen(PORT, () => {
    console.log(`API server running on port ${PORT}!`);
});