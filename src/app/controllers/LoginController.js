
const dbConnection = require('../../database');

class registerController{
    // [GET] /create
    index(req, res){
        res.render('login');
    }
}

module.exports = new registerController;
