
define(function (require) {
  var Backbone = require('backbone'),
  	$ = require('jquery'),
    Router = require('app/Routes');

	$(document).ready(function() {
	  var app = new Router();
	  Backbone.history.start();
	});
});