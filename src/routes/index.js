const createRouter = require('./create');
const allFootballClub = require('./allFootballClub');
const footballClub = require('./footballClubs');
const ttRouter = require('./tt');
const homeRouter = require('./home');
const scheduleRouter = require('./schedule');

function route(app){
    app.use('/create', createRouter);
    app.use('/all-fb-club', allFootballClub);
    app.use('/tt', ttRouter);
    app.use('/schedule', scheduleRouter);
    app.use('/', homeRouter);
}

module.exports = route;
