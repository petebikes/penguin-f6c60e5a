'use strict';
let assert = chai.assert,
  Backbone = require('backbone'),
  Collection = require('../js/app/Collection');

describe('Collection', function() {
  beforeEach(function () {
  });

  afterEach(function () {
  });

  it('is a reference to Backbone.Collection', function() {
    assert.isTrue(Collection.prototype instanceof Backbone.Collection);
  });
});
