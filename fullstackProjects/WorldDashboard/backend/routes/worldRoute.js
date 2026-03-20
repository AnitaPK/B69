const express = require('express')
const worldController = require('../constrollers/worldController')

const router = express.Router()

router.get('/totalPopulation', worldController.totalPopulation)













module.exports = router