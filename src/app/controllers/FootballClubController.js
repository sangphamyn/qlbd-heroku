const FootballClub = require('../models/FootballClub');
const { mongooseToObject } = require('../../util/mongoose');

class FootballClubController{

    // [GET] /all-fb-club/:slug
    show(req, res, next) {
        FootballClub.findOne({ slug: req.params.slug })
            .then(footballClub => {
                res.render('footballClub/show', { footballClub: mongooseToObject(footballClub) });
            })
            .catch(next);
    }


}

module.exports = new FootballClubController;
