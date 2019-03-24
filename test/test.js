'use strict';

const chai = require('chai');
const expect = require('chai').expect;

chai.use(require('chai-http'));

const app = require('../app.js'); // Our app

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
      .then(function(res) {
        expect(res).to.have.status(200);
      });
  });

});
