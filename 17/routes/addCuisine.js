const express = require('express')
const router = express.Router();
const db = require('../sql.js')

router.post('/', (req, res, next) => {
    let cuisineName = req.body.cuisineName

    if(!cuisineName){
        res.end('输入内容不能为空！！')
    }

    db.query('insert into cuisine (cuisineName) value (?)', [cuisineName], (err, data) => {
        if (err) throw err
        else res.end('成功')

    })

})

module.exports = router