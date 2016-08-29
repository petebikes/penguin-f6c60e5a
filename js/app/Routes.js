define(function (require) {
  var Backbone = require('backbone'),
    View = require('app/View'),
    Collection = require('app/Collection'),
    AppRouter;

  AppRouter = Backbone.Router.extend({
    routes: {
      "": "index"
    },
    index: function() {
      var view = new View({ collection: new Collection() });
    }
  });

  return AppRouter;
});