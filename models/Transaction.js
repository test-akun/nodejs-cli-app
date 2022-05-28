const { Schema, model } = require('mongoose')

const now = new Date().getTime()
const TransactionSchema = Schema({
    value: {
        type: Number,
        require: true
    },
    date: {
        type: Number,
        default: now

    }
})

const Transaction = model('transaction', TransactionSchema)

module.exports = Transaction
