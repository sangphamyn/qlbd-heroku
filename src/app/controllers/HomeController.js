const FootballClub = require('../models/FootballClub');
const { multipleMongooseToObject } = require('../../util/mongoose');

class homeController{
    //[GET] 
    index(req, res){
        res.render('home');
    }
}

module.exports = new homeController;
