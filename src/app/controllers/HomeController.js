const FootballClub = require('../models/FootballClub');
const { multipleMongooseToObject } = require('../../util/mongoose');

class homeController{
    //[GET] 
    index(req, res){
        res.render('home',{
            name: req.session.name
        });
    }
}

module.exports = new homeController;
