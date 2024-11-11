// app.test.js
const request = require('supertest');
const app = require('../app');
const assert = require('assert');

describe('GET /', function() {
  it('responds with Hello World!', function(done) {
    request(app)
      .get('/')
      .expect(200)
      .end(function(err, res) {
        if (err) return done(err);
        assert.strictEqual(res.text, 'Hello World!');
        done();
      });
  });
});
