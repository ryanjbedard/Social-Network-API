const express = require('express');
const mongoose = require('mongoose');
require('dotenv').config();

const app = express();
const PORT = process.env.PORT || 3001;
const MONGODB_URI = process.env.MONGODB_URI || 'mongodb://localhost/social-network-api';

//Connect to MongoDB
mongoose.connect("mongodb://localhost27017/Social_Network_API"