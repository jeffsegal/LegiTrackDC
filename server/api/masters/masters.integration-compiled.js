'use strict';

var app = require('../..');
import request from 'supertest';

var newMasters;

describe('Masters API:', function () {

  describe('GET /api/masters', function () {
    var masterss;

    beforeEach(function (done) {
      request(app).get('/api/masters').expect(200).expect('Content-Type', /json/).end((err, res) => {
        if (err) {
          return done(err);
        }
        masterss = res.body;
        done();
      });
    });

    it('should respond with JSON array', function () {
      masterss.should.be.instanceOf(Array);
    });
  });

  describe('POST /api/masters', function () {
    beforeEach(function (done) {
      request(app).post('/api/masters').send({
        name: 'New Masters',
        info: 'This is the brand new masters!!!'
      }).expect(201).expect('Content-Type', /json/).end((err, res) => {
        if (err) {
          return done(err);
        }
        newMasters = res.body;
        done();
      });
    });

    it('should respond with the newly created masters', function () {
      newMasters.name.should.equal('New Masters');
      newMasters.info.should.equal('This is the brand new masters!!!');
    });
  });

  describe('GET /api/masters/:id', function () {
    var masters;

    beforeEach(function (done) {
      request(app).get('/api/masters/' + newMasters._id).expect(200).expect('Content-Type', /json/).end((err, res) => {
        if (err) {
          return done(err);
        }
        masters = res.body;
        done();
      });
    });

    afterEach(function () {
      masters = {};
    });

    it('should respond with the requested masters', function () {
      masters.name.should.equal('New Masters');
      masters.info.should.equal('This is the brand new masters!!!');
    });
  });

  describe('PUT /api/masters/:id', function () {
    var updatedMasters;

    beforeEach(function (done) {
      request(app).put('/api/masters/' + newMasters._id).send({
        name: 'Updated Masters',
        info: 'This is the updated masters!!!'
      }).expect(200).expect('Content-Type', /json/).end(function (err, res) {
        if (err) {
          return done(err);
        }
        updatedMasters = res.body;
        done();
      });
    });

    afterEach(function () {
      updatedMasters = {};
    });

    it('should respond with the updated masters', function () {
      updatedMasters.name.should.equal('Updated Masters');
      updatedMasters.info.should.equal('This is the updated masters!!!');
    });
  });

  describe('DELETE /api/masters/:id', function () {

    it('should respond with 204 on successful removal', function (done) {
      request(app).delete('/api/masters/' + newMasters._id).expect(204).end((err, res) => {
        if (err) {
          return done(err);
        }
        done();
      });
    });

    it('should respond with 404 when masters does not exist', function (done) {
      request(app).delete('/api/masters/' + newMasters._id).expect(404).end((err, res) => {
        if (err) {
          return done(err);
        }
        done();
      });
    });
  });
});

//# sourceMappingURL=masters.integration-compiled.js.map