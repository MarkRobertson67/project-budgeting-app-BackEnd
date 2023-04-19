
const express = require('express');
const transactions = express.Router();
const transactionsArray = require('../models/transactions.js')


// index
transactions.get('/', (req, res) => {
    res.json(transactionsArray)
})


// show single item
transactions.get('/:id', (req, res) => {
    const { id } = req.params
    const transaction = transactionsArray[id]
    if (transaction) {
        res.send(transactionsArray[id])
    } else {
        res.status(404).redirect("*")
    }
})


//Delete
transactions.delete('/:id', (req, res) => {
    const { id } = req.params
    const deletedTransactions = transactionsArray.splice(id, 1)
    res.status(202).json(deletedTransactions)  
})


//CREATE
transactions.post("/newtransactions", (req, res) => {
    const newTransactions = req.body;
    transactionsArray.push(newTransactions);
    res.status(201).json(newTransactions);
  });

 

module.exports = transactions;