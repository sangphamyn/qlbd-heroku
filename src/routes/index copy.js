const createRouter = require('./create');
const allFootballClub = require('./allFootballClub');
const footballClub = require('./footballClubs');
const ttRouter = require('./tt');
const homeRouter = require('./home');

function route(app){
    app.use('/create', createRouter);
    app.use('/all-fb-club', allFootballClub);
    app.use('/all-fb-club', footballClub);
    app.use('/tt', ttRouter);
    app.use('/', homeRouter);
}

module.exports = route;
