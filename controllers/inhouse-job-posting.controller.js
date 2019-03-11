const Posting = require('../models/inhouse-job-posting.model');

//Simple version, without validation or sanitation
exports.test = function (req, res) {
    res.send('Greetings from the Test controller!');
};

// Create Posting
exports.posting_create = function (req, res) {
    let posting = new Posting(
        {
            recruiter: req.body.recruiter,
            title: req.body.title,
            description: req.body.description,
            location: req.body.location,
            salary: req.body.salary,
            requirements: req.body.requirements,
            company: req.body.company
        }
    );

    posting.save(function (err) {
        if (err) {
            return next(err);
        }
        res.send('Posting Created successfully')
    })
};

// Read Posting by id
exports.posting_details = function (req, res) {
    Posting.findById(req.params.id, function (err, posting) {
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