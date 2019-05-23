const express = require('express')
const router = express.Router();

const db = require('../sql.js')

router.get('/', (req, res, next) => {

    db.query('select * from cuisine', (err, data) => {
        if(err) throw err
        
        res.render('cuisineList', {
            data
        })
    })

})

module.exports = router
