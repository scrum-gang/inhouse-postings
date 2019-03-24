'use strict';

const chai = require('chai');
const expect = require('chai').expect;

chai.use(require('chai-http'));

const app = require('../app.js'); // Our app

const newUser = {
	"email": "realperson@realemail.com",
	"password": "abc123",
	"type": "Applicant"
};

const godMode = {
	"email": "god@realemail.com",
	"password": "cdb234",
	"type": "Applicant"
};

var godToken = null;

describe('Testing inhouse job posting server', function() {
  this.timeout(5000); // How long to wait for a response (ms)

  before(function() {

  });

  after(function() {

  });

  // GET - Should be able to reach test endpoint
  it('should reach test endpoint', function() {
    return chai.request(app)
      .get('/posting/test')
      .set("Authorization", "Bearer " + godToken)
      .then(function(res) {
        expect(res).to.have.status(200);
      });
  });

    // GET - Should test getting all postings for a recruiter
    it('should get all postings for a recruiter', function() {
      return chai.request(app)
        .get('/posting/recruiter/Bob')
        .set("Authorization", "Bearer " + godToken)
        .then(function(res) {
          expect(res).to.have.status(200);
        });
    });

    // GET - Should get all postings
    it('should get all postings for a recruiter', function() {
      return chai.request(app)
        .get('/posting/recruiter/allpostings')
        .set("Authorization", "Bearer " + godToken)
        .then(function(res) {
          expect(res).to.have.status(200);
        });
    });

});
