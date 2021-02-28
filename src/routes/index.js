const createRouter = require('./create');
const allFootballClub = require('./allFootballClub');
const footballClub = require('./footballClubs');
const ttRouter = require('./tt');
const homeRouter = require('./home');
const scheduleRouter = require('./schedule');
const standingsRouter = require('./standings');
const zoomRouter = require('./zoom');
const loginRouter = require('./login');
const logoutRouter = require('./logout');
var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var session = require('express-session');
var mysql= require('mysql');


function route(app){
    app.use(session({ 
        secret: '123456cat',
        resave: false,
        saveUninitialized: true,
        cookie: { maxAge: 60000 }
    }))
    app.use('/login', loginRouter);
    app.use('/logout', logoutRouter);
    app.use('/zoom', zoomRouter);
    app.use('/standings', standingsRouter);
    app.use('/manager/add', createRouter);
    app.use('/all-fb-club', allFootballClub);
    app.use('/manager', ttRouter);
    app.use('/schedule', scheduleRouter);
    app.use('/', homeRouter);
}

module.exports = route;
