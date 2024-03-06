const express = require('express');
constdb = require('./config/connection');
const routes = require('./routes');

const cwd = process.cwd();

const PORT = process.env.PORT || 3001;
const app = express();

const activity = cwd.includes('01-Activities')

app.use(express.urlencoded({ extended: true }));