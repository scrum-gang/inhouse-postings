const express = require('express');
const bodyParser = require('body-parser');

const posting = require('./routes/inhouse-job-posting.route'); // Imports routes for the products
const app = express();

app.use('/posting', posting);

let port = 1234;
app.listen(port, () => {
    console.log('Server is up and running on port numner ' + port);
});