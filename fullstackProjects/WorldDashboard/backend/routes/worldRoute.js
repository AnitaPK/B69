const express = require('express')
const worldController = require('../constrollers/worldController')

const router = express.Router()

router.get('/totalPopulation', worldController.totalPopulation)

router.get('/topTenPopCountry',worldController.topTenPopCountry )

router.get('/TotalCountryCount', worldController.TotalCountryCount)

module.exports = router