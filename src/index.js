const express = require('express');
const app = express();
const path = require('path');
const handlebars = require('express-handlebars');
const route = require('./routes');
const methodOverride = require('method-override');
const port = Number(process.env.PORT || 3000);
const uri = process.env.MONGODB_URI;
app.use(express.urlencoded());
app.use(express.json());

const db = require('./config/db');
db.connect();
app.use(express.static(path.join(__dirname, 'public')));
app.use(express.json());

//De dung phuong thu PUT
app.use(methodOverride('_method'));

//Template engine
app.engine('hbs', handlebars({
    extname: 'hbs',
    helpers: {
        sum: (a, b) => a+b
    }
}))
app.set('view engine', 'hbs');
app.set('views', path.join(__dirname, 'resources', 'views'));

route(app);

app.listen(port, () => console.log(`App listening at http://localhost:${port}`));