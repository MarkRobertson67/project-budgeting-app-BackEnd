const express = require('express');
const app = express();
const cors = require ("cors");
const transactionsController = require('./Controllers/transactionsController');

app.use(express.json())
app.use(cors());

app.use("/transactions", transactionsController)


app.get('/', (req, res) => {
    res.send("welcome to the Budgeting App");
});

app.get('*', (req, res) => {
    res.status(404).json({ error: "Page not found"});
});

module.exports = app;  