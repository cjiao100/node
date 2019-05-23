const express = require('express');
const router = express.Router();
const db = require('../sql.js')

/* GET home page. */
router.get('/', function (req, res, next) {
    res.render('index');
});

router.post('/main', (req, res, next) => {
    let val = req.body
    let userName = val.userName
    let userPwd = val.userPwd

    db.query('select userName, userPwd from user where userName=? and userPwd=?', [userName, userPwd], (err, results, fields) => {
        if(err) throw err

        if (results.length > 0){
            res.render('main')
        } else {
            res.writeHead(200, {'Content-Type':'text/html;charset=utf-8'})
            res.end('账号密码错误')
        }
    })
})

module.exports = router;
