const express = require('express')
const router = express.Router();

router.get('/', (req, res, next) => {
    res.render('saveCuisine')
})

module.exports = router