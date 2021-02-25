const FootballClub = require('../models/FootballClub');
const { multipleMongooseToObject } = require('../../util/mongoose');

class homeController{
    //[GET] 
    index(req, res){
        res.render('login-register-form');
    }
}

module.exports = new homeController;
