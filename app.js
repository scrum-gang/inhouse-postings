const express = require('express');
const bodyParser = require('body-parser');
var cors = require('cors');

const posting = require('./routes/inhouse-job-posting.route'); // Imports routes for the products
const app = express();

//Solve CORS issues
app.use(cors())
app.options('*', cors())

app.use(function(req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Methods", "GET,HEAD,OPTIONS,POST,PUT");
    res.header("Access-Control-Allow-Headers", "Access-Control-Allow-Headers, Origin,Accept, X-Requested-With, Content-Type, Access-Control-Request-Method, Access-Control-Request-Headers");
    next();
}); 


// Set up mongoose connection
const mongoose = require('mongoose');
let dev_db_url = 'mongodb://filip:A12345@ds111851.mlab.com:11851/heroku_09tw7rg6';
let mongoDB = process.env.MONGODB_URI || dev_db_url;
mongoose.connect(mongoDB);
mongoose.Promise = global.Promise;
let db = mongoose.connection;
db.on('error', console.error.bind(console, 'MongoDB connection error:'));

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: false}));


app.use('/posting', posting);

let port = 1234;
app.listen(process.env.PORT || port, () => {
    console.log('Server is up and running on port number ' + port);
});