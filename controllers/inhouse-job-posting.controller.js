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