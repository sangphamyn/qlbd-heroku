const createRouter = require('./create');
const allFootballClub = require('./allFootballClub');
const footballClub = require('./footballClubs');
const ttRouter = require('./tt');
const homeRouter = require('./home');
const scheduleRouter = require('./schedule');
const standingsRouter = require('./standings');

function route(app){
    app.use('/standings', standingsRouter);
    app.use('/manager/add', createRouter);
    app.use('/all-fb-club', allFootballClub);
    app.use('/manager', ttRouter);
    app.use('/schedule', scheduleRouter);
    app.use('/', homeRouter);
}

module.exports = route;
