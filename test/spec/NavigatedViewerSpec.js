'use strict';

var TestHelper = require('../TestHelper');

var fs = require('fs');

var NavigatedViewer = require('../../lib/NavigatedViewer');


describe('NavigatedViewer', function() {

  var container;

  beforeEach(function() {
    container = jasmine.getEnv().getTestContainer();
  });


  function createViewer(xml, done) {
    var viewer = new NavigatedViewer({ container: container });

    viewer.importXML(xml, function(err, warnings) {
      done(err, warnings, viewer);
    });
  }


  it('should import simple process', function(done) {

    var xml = fs.readFileSync('test/fixtures/bpmn/simple.bpmn', 'utf8');

    createViewer(xml, done);
  });


  describe('navigation features', function() {

    var xml = fs.readFileSync('test/fixtures/bpmn/simple.bpmn', 'utf8');

    it('should include zoomScroll', function(done) {
      createViewer(xml, function(err, warnings, viewer) {
        expect(viewer.get('zoomScroll')).toBeDefined();

        done(err);
      });
    });


    it('should include moveCanvas', function(done) {
      createViewer(xml, function(err, warnings, viewer) {
        expect(viewer.get('moveCanvas')).toBeDefined();

        done(err);
      });
    });

  });

});