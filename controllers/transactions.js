const Transaction = require('../models/Transaction')

// GET Transaction
const getTransaction = async (req, res) => {
    try {
        const transactions = await Transaction.find()
        if (!transactions) {
            throw new Error('No transactions')
        }
        res.status(200).json(transactions)
    } catch (error) {
        res.status(400).json({ message: error.message })
    }
}

const postTransaction = async (req, res) => {
    // const { value, date } = req.body
    const newTransaction = new Transaction(req.body)

    try {
        const transaction = await newTransaction.save()
        if (!transaction) {
            throw new Error('There was an error saving the transaction')
        }
        res.status(200).json(transaction)
    } catch (error) {
        res.status(500).json({ message: error.message })
    }
}

const deleteTransaction = async (req, res) => {
    const { id } = req.params
    try {
        const transaction = await Transaction.findById(id)
        if (!transaction) {
            throw new Error('No transaction was found')
        }
        const removed = await transaction.remove()

        if (!removed) {
            throw new Error('There was a problem deleting the transaction')
        }
        res.status(200).json({ id })
    } catch (error) {
        res.status(404).json({ message: error.message })
    }
}

module.exports = {
    getTransaction,
    postTransaction,
    deleteTransaction
}