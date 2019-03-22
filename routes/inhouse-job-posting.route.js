const express = require('express');
const router = express.Router();

// Require the controllers
const posting_controller = require('../controllers/inhouse-job-posting.controller');


// A simple test url to check that all of our files are communicating correctly.
router.get('/test', posting_controller.test);

/*------------
GET ROUTES
-------------*/
//Get by id
router.get('/id/:id', posting_controller.posting_details);

//Get all postings for a recruiter
router.get('/recruiter/:recruiter', posting_controller.posting_details_by_recruiter);

//Get all postings 
router.get('/allpostings', posting_controller.all_postings);


/*------------
POST ROUTES
-------------*/
//Create posting
router.post('/create', posting_controller.posting_create);


/*------------
PUT ROUTES
-------------*/
//Update by id
router.put('/:id/', posting_controller.posting_update);


/*-------------
DELETE ROUTES
--------------*/
//Delete by id
router.delete('/id/:id', posting_controller.posting_delete);

// Drop all records 
router.delete('/dropall', posting_controller.drop_all)


module.exports = router;