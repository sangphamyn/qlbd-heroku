const FootballClub = require('../models/FootballClub');
const { multipleMongooseToObject } = require('../../util/mongoose');
const { mongooseToObject } = require('../../util/mongoose');

class ttController{
    // [GET] /tt
    index(req, res, next){

        /*FootballClub.find({}, function (err, footballClubs){
            if(!err) res.json(footballClubs);
            else next(err);
        });*/

        res.render('stored-fbClub');
    }

    // [GET] /tt
    storedFbClub(req, res, next){
        FootballClub.find({})
            .then(fbClubs => res.render('stored-fbClub', {
                fbClubs: multipleMongooseToObject(fbClubs)
            }))
            .catch(next)
    }

    // [GET] /tt/:id/edit
    edit(req, res, next){
        FootballClub.findById(req.params.id)
            .then(fbClub => res.render('edit', {
                fbClub: mongooseToObject(fbClub)
            }))
    }

    // [PUT] /tt/:id
    update(req, res, next) {
        FootballClub.updateOne({ _id: req.params.id }, req.body)
            .then(() => res.redirect('/tt'))
            .catch(next)
    }

    store(req, res, next) {
        //res.json(req.body);

        const fbClub = new FootballClub(req.body);
        fbClub.save()
            .then(() => res.redirect(`/`))
            .catch(err => {})
    }

    // [DELETE] /tt/:id
    delete(req, res, next) {
        FootballClub.deleteOne({ _id: req.params.id})
            .then(() => res.redirect('back'))
            .catch(next)
    }

}

module.exports = new ttController;
