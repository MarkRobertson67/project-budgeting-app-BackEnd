const express = require('express');
const transactions = express.Router();
const transactionsArray = require('../models/transactions')


// index
transactions.get('/', (req, res) => {
    res.json(transactionsArray)
})

// Delete
transactions.delete('/:id', (req, res) => {
    const { id } = req.params
    const deletedTransactions = transactionsArray.splice(id, 1)
    res.status(202).json(deletedTransactions)  
})

// CREATE
transactions.post("/newtransaction", (req, res) => {
    const newTransactions = req.body;
    transactionsArray.push(newTransactions);
    res.status(201).json({ success: true, payload: newLog });
  });

 





module.exports = transactions;