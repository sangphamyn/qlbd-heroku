var express = require('express');
var router = express.Router();
var db=require('../database');

router.get('/', function(req, res, next) {
  res.render('login');
});
router.post('/', function(req, res){
    var emailAddress = req.body.email_address;
    var password = req.body.password;
    var sql='SELECT * FROM registration WHERE email_address =? AND password =?';
    db.query(sql, [emailAddress, password], function (err, data, fields) {
        if(err) throw err
        if(data.length>0){
            req.session.loggedinUser= true;
            req.session.emailAddress= emailAddress;
            req.session.name = data[0].name;
            res.redirect('/');
        }else{
            res.render('login',{alertMsg:"Your Email Address or password is wrong"});
        }
    })
})

router.post('/register', function(req, res, next) {
    inputData ={
        name: req.body.name,
        email_address: req.body.email_address,
        password: req.body.password,
        confirm_password: req.body.password
    }

    var sql='SELECT * FROM registration WHERE email_address =?';
    db.query(sql, [inputData.email_address] ,function (err, data, fields) {
        if(err) throw err
        if(data.length>1){
            var msg = inputData.email_address+ " was already exist";
            res.render('login',{alertMsg_register:msg});
        }else if(inputData.confirm_password != inputData.password){
            var msg ="Password & Confirm Password is not Matched";
            res.render('login',{alertMsg_register:msg});
        }else{
            var sql = 'INSERT INTO registration SET ?';
            db.query(sql, inputData, function (err, data) {
                if (err) throw err;
            });
            var msg ="Your are successfully registered";
            req.session.loggedinUser= true;
            req.session.name = data[0].name;
            res.redirect('/');
        }
    })
});

module.exports = router;
