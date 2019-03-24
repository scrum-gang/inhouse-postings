const Posting = require('../models/inhouse-job-posting.model');
const {auth_user_applicant, auth_user_recruiter} = require('../authentication/inhouse-job-posting.auth')

const RECRUITER = "Recruiter";
const APPLICANT = "Applicant";
//Simple version, without validation or sanitation
exports.test = function (req, res) {
    res.send('Greetings from the Test controller!');
};

// Create Posting
//exports.posting_create = async function (req, res) {
exports.posting_create = function (req, res) {
    
    //authentication
    /*const authorized = await auth_user_recruiter(req).then(response => response.body.type === RECRUITER);

    if (!authorized) {
        res.json({"message": "User not an authorized recruiter."});
        return;
    }*/
    function getDateTime() {
        var date = new Date();

        var hour = date.getHours();
        hour = (hour < 10 ? "0" : "") + hour;
    
        var min  = date.getMinutes();
        min = (min < 10 ? "0" : "") + min;
    
        var sec  = date.getSeconds();
        sec = (sec < 10 ? "0" : "") + sec;
    
        var year = date.getFullYear();
    
        var month = date.getMonth() + 1;
        month = (month < 10 ? "0" : "") + month;
    
        var day  = date.getDate();
        day = (day < 10 ? "0" : "") + day;
    
        return year + ":" + month + ":" + day + ":" + hour + ":" + min + ":" + sec;
    }

    let posting = new Posting({
        recruiter: req.body.recruiter,
        title: req.body.title,
        description: req.body.description,
        location: req.body.location,
        salary: req.body.salary,
        requirements: req.body.requirements,
        company: req.body.company,
        start_date: req.body.start_date,
        end_date: req.body.end_date,
        posting_date: getDateTime(),
        deadline: req.body.deadline
    });

    posting.save(function (err) {
        if (err) {
            res.send(err);
        } else {
            res.send(posting)
        }
        
    })
};

// Get Posting by id
exports.posting_details = function (req, res) {
    Posting.findById(req.params.id, function (err, posting) {
        if (err){
            res.send(err);
        } else {
            res.send(posting);
        }  
    })
};

// Update Posting by id
exports.posting_update = function (req, res) {
    Posting.findByIdAndUpdate(req.params.id, {$set: req.body}, function (err, posting) {
        if (err){
            res.send(err);
        } else {
            res.send('Posting udpated.');
        }  
    });
};

// Delete by id
exports.posting_delete = function (req, res) {
    Posting.findByIdAndRemove(req.params.id, function (err) {
        if (err){
            res.send(err);
        } else {
            res.send('Deleted successfully!');
        }  
    })
};

// Get all postings from a recruiter
exports.posting_details_by_recruiter = function (req, res) {
    Posting.find({recruiter: req.params.recruiter}, function (err, posting) {
        if (err){
            res.send(err);
        } else {
            res.send(posting);
        }  
    })
};

// Get all postings from DB
exports.all_postings = function (req, res) {
    Posting.find({}, function (err, posting) {
        if (err){
            res.send(err);
        } else {
            res.send(posting);
        }
        
    })
};

// Drop all records
exports.drop_all = function (req, res) {
    Posting.remove({}, function (err) {
        if (err) {
            res.send(err);
        } else {
            res.send('Deleted all records successfully!');
        }
    })
};