const express = require('express');
const router = express.Router();

// Require the controllers
const posting_controller = require('../controllers/inhouse-job-posting.controller');


// A simple test url to check that all of our files are communicating correctly.
router.get('/test', posting_controller.test);

//Create posting
router.post('/create', posting_controller.posting_create);

//Read by id
router.get('/:id', posting_controller.posting_details);

//Update by id
router.put('/:id/update', posting_controller.posting_update);

//Delete by id
router.delete('/:id/delete', posting_controller.posting_delete);

module.exports = router;