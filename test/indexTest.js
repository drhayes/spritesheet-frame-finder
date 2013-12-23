// Copyright (c) 2013 David Hayes
/* global describe, it  */

'use strict';

var sff = require('../index');
var assert = require('assert');

describe('Spritesheet Frame Finder', function() {
  it('exposes multiple strategies for finding animation frames', function() {
    assert(typeof sff.auto === 'function');
  });

  describe('auto', function() {
    it('creates frames under simple conditions', function() {
      var frames = sff.auto(100, 100, 10, 10);
      assert.equal(frames.length, 100);
      // First frame.
      assert.equal(frames[0].x, 0);
      assert.equal(frames[0].y, 0);
      // Second frame.
      assert.equal(frames[1].x, 10);
      assert.equal(frames[1].y, 0);
      // Tenth frame.
      assert.equal(frames[9].x, 90);
      assert.equal(frames[9].y, 0);
      // Eleventh frame.
      assert.equal(frames[10].x, 0);
      assert.equal(frames[10].y, 10);
    });

    it('does the right thing when there is overlap', function() {
      var frames = sff.auto(100, 100, 27, 27);
      assert.equal(frames.length, 9);
      // First frame.
      assert.equal(frames[0].x, 0);
      assert.equal(frames[0].y, 0);
      // Second frame.
      assert.equal(frames[1].x, 27);
      assert.equal(frames[1].y, 0);
      // Third frame.
      assert.equal(frames[2].x, 54);
      assert.equal(frames[2].y, 0);
      // Fourth frame.
      assert.equal(frames[3].x, 0);
      assert.equal(frames[3].y, 27);
    });
  });
});