const Transaction = require('../models/Transaction')

// GET Transaction
const getTransaction = async (req, res) => {
    try {
        const transaction = await Transaction.find()
        if (!transactions) {
            throw new Error('No transactions')
        }
        res.json(transaction)
    } catch (error) {
        res.status(400).json({ message: error.message })
    }
}

module.exports = {
    getTransaction,
}