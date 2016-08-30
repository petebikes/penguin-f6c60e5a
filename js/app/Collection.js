
define(function (require) {
  var Backbone = require('backbone'),
    Model = require('app/Model'),
    Collection;

  Collection = Backbone.Collection.extend({

    model: Model,

    url: 'https://www.googleapis.com/books/v1/volumes?q=python',

    parse: function(data){
      var items = _.result(data, 'items');

      return items;
    },

  });

  return Collection;
});
