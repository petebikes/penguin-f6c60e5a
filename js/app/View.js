define(function (require) {
    var _ = require('underscore'),
      $ = require('jquery'),
      Backbone = require('backbone'),
      Collection = require('app/Collection'),
      myTemplate = require('app/templates/mytemplate.html'),
      View;

  View = Backbone.View.extend({

    el: '#js-view-region',

    template: myTemplate,

    initialize: function (options) {
      //this.$el.html(this.template);

      this.collection = _.result(options, 'collection', new Collection());
      this.listenTo(this.collection, 'sync', this.render, this);
      this.collection.fetch();
    },

    render: function () {
      this.$el.html(this.template({'books': this.collection.toJSON()}));
      return this;
    },

  });

  return View;
});
