
define(function (require) {
  var Backbone = require('backbone'),
    Model = require('app/Model'),
    Collection;

  Collection = Backbone.Collection.extend({

    model: Model

  });

  return Collection;
});