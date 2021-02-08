const mongoose = require('mongoose');

async function connect(){
    
    try {
        await mongoose.connect('mongodb://localhost:27017/premier_league_football_club', {
            useNewUrlParser: true,
            useUnifiedTopology: true,
            useCreateIndex: true
        });
        console.log("Connect successfully");
    } catch (error) {
        console.log("Connect failure");
    }
    
    /*mongoose.connect('mongodb://localhost:27017/premier_league_football_club', {useNewUrlParser: true, useUnifiedTopology: true});*/

}

module.exports = { connect };
