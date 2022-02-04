const express = require('express');
const dotenv = require('dotenv');
const notes = require('./data/notes');

dotenv.config();
const app = express();

app.use(express.json());
app.use(express.urlencoded({extended: false}));

app.get('/', (req, res) => {
    res.status(200).json('Welcome to the Backend!');
})

app.get('/api/notes', (req, res) => {
    res.status(200).json(notes);
})
const port = process.env.PORT || 5000;

app.listen(port, () => {
    console.log(`Server running at port ${port}...`);
})