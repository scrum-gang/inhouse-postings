const Posting = require('../models/inhouse-job-posting.model');

//Simple version, without validation or sanitation
exports.test = function (req, res) {
    res.send('Greetings from the Test controller!');
};

// Create Posting
exports.posting_create = function (req, res) {
    let posting = new Posting(
        {
            posting_id: req.body.posting_id,
            recruiter: req.body.recruiter,
            title: req.body.title,
            description: req.body.description,
            location: req.body.location,
            salary: req.body.salary,
            requirements: req.body.requirements,
            company: req.body.company,
            start_date: req.body.start_date,
            end_date: req.body.end_date,
            posting_date: req.body.posting_date
        }
    );

    posting.save(function (err) {
        if (err) {
            return next(err);
        }
        res.send('Posting Created successfully')
    })
};

// Get Posting by posting_id
exports.posting_details = function (req, res) {
    Posting.find({posting_id: req.params.posting_id}, function (err, posting) {
        if (err) return next(err);
        res.send(posting);
    })
};

// Update Posting by id
exports.posting_update = function (req, res) {
    Posting.findByIdAndUpdate(req.params.id, {$set: req.body}, function (err, posting) {
        if (err) return next(err);
        res.send('Posting udpated.');
    });
};

// Delete by id
exports.posting_delete = function (req, res) {
    Posting.findByIdAndRemove(req.params.id, function (err) {
        if (err) return next(err);
        res.send('Deleted successfully!');
    })
};

// Get all postings from a recruiter
exports.posting_details_by_recruiter = function (req, res) {
    Posting.find({recruiter: req.params.recruiter}, function (err, posting) {
        if (err) return next(err);
        res.send(posting);
    })
};