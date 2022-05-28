const { Router } = require('express')
const { getTransaction } = require('../controllers/transactions')

const router = Router()

router.get('/', getTransaction)

module.exports = router