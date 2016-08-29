define(function (require) {
    var _ = require('underscore'),
      $ = require('jquery'),
      Backbone = require('backbone'),
      Collection = require('app/Collection'),
      myTemplate = require('app/templates/mytemplate.html'),
      View;

  View = Backbone.View.extend({

    el: '#js-view-region',

    template: myTemplate(),

    initialize: function () {
      this.$el.html(this.template);
    }

  });

  return View;
});