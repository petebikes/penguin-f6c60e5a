
define(function (require) {
    var Backbone = require('backbone'),
    Model;

  Model = Backbone.Model.extend({
    defaults: {

    },

    parse: function (data) {
      return _.extend(data, _.result(data, 'volumeInfo'));
    }

  });

  return Model;
});
