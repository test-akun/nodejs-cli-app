const { Router } = require('express')
const { getTransaction, postTransaction, deleteTransaction } = require('../controllers/transactions')

const router = Router()

router.get('/', getTransaction)
router.post('/', postTransaction)
router.delete('/:id', deleteTransaction)

module.exports = router