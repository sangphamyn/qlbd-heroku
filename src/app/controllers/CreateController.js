const FootballClub = require('../models/FootballClub');

class createController{
    // [GET] /create
    index(req, res){
        res.render('create');
    }
    // [POST] /create/store
    store(req, res, next) {
        //res.json(req.body);

        const footballClub = new FootballClub(req.body);
        footballClub.save()
            .then(() => res.redirect(`/all-fb-club`))
            .catch(err => {})
    }
}

module.exports = new createController;
