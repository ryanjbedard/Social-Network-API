const express = require('express');
constdb = require('./config/connection');
const routes = require('./routes/api');
const mongoose = require('mongoose');

const userRoutes = require('./routes/api/userRoutes');
const thoughtRoutes = require('./routes/api/thoughtRoutes');

const PORT = process.env.PORT || 3001;
const app = express();

const cwd = process.cwd();
app.use(express.urlencoded({ extended: true }));


app.use('/api/users', userRoutes);
app.use('/api/thoughts', thoughtRoutes);

app.get('/', (req, res) => {
    res.send('Welcome to the Social Network API!');
});


mongoose.connection.once('open', () => {
    console.log('Connected to MongoDB');
});

app.listen(PORT, () => {
    console.log(`API server running on port ${PORT}!`);
});