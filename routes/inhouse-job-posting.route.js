const express = require('express');
const router = express.Router();

// Require the controllers
const posting_controller = require('../controllers/inhouse-job-posting.controller');


// A simple test url to check that all of our files are communicating correctly.
router.get('/test', posting_controller.test);

//Create posting
router.post('/create', posting_controller.posting_create);

module.exports = router;