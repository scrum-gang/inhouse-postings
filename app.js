const express = require('express');
const bodyParser = require('body-parser');

const posting = require('./routes/inhouse-job-posting.route'); // Imports routes for the products
const app = express();

// Set up mongoose connection
const mongoose = require('mongoose');
let dev_db_url = 'mongodb://posting-user:Rami_Filip428@ds161391.mlab.com:61391/inhouse-job-posting';
let mongoDB = process.env.MONGODB_URI || dev_db_url;
mongoose.connect(mongoDB);
mongoose.Promise = global.Promise;
let db = mongoose.connection;
db.on('error', console.error.bind(console, 'MongoDB connection error:'));

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: false}));

app.use('/posting', posting);

let port = 1234;
app.listen(port, () => {
    console.log('Server is up and running on port numner ' + port);
});