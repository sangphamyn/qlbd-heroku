const mongoose = require('mongoose');
var slug = require('mongoose-slug-generator');
mongoose.plugin(slug);
const Schema = mongoose.Schema;

const Football_club = new Schema({
    name: { type: String, maxLength: 255 },
    logo: {type: String, maxLength: 10000 },
    coach: {type: String, maxLength: 255 },
    stadium: {type: String, maxLength: 255 },
    location: {type: String, maxLength: 255 },
    youtubeID: {type: String, maxLength: 255 },
    slug: {type: String, slug: 'name', unique: true}
}, {
    timestamps: true
})

module.exports = mongoose.model('Football_club', Football_club);