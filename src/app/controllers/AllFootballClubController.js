const FootballClub = require('../models/FootballClub');
const { multipleMongooseToObject } = require('../../util/mongoose');

class allFootballClubController{
    // [GET] /all-fb-club
    index(req, res, next){
        FootballClub.find({}, function (err, footballClubs){
            if(!err) {
                res.render('allFbClub', {
                    footballClubs: multipleMongooseToObject(footballClubs)
                })
            }
            else res.status(400).json({error: 'ERROR!!!'});
        })
    }
    
}

module.exports = new allFootballClubController;