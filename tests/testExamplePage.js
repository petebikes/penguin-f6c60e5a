'use strict';
let assert = chai.assert,
  Backbone = require('backbone'),
  Collection = require('../js/app/Collection'),
  Model = require('../js/app/Model'),
  View = require('../js/app/View');

describe('Collection', function() {
  beforeEach(function () {
  });

  afterEach(function () {
  });

  it('is a reference to Backbone.Collection', function() {
    assert.isTrue(Collection.prototype instanceof Backbone.Collection);
  });

  it('should parse the items array', function () {
    let collection = new Collection();

    let parsed = collection.parse({
      "kind": "books#volumes",
      "totalItems": 952,
      "items": [
        {
          "kind": "books#volume",
          "id": "4pgQfXQvekcC",
          "etag": "imlUmCyBxro",
          "selfLink": "https://www.googleapis.com/books/v1/volumes/4pgQfXQvekcC",
          "volumeInfo": {
            "title": "Learning Python",
            "authors": [
              "Mark Lutz"
            ],
            "publisher": "\"O'Reilly Media, Inc.\"",
            "publishedDate": "2013-06-1"
          },
        }
      ],
    });

    assert.isTrue(_.isArray(parsed));
  });

  // it('should fetch something', function () {
  //   var collection = new Collection();
  //   collection.fetch({
  //     success: function () {
  //       assert.isTrue(true);
  //     },
  //     error: function (collection, response, options) {
  //       throw response;
  //     }
  //   });
  // });
});

describe('Model', function () {
  beforeEach(function () {
  });

  afterEach(function () {
  });

  it('is a reference to Backbone.Model', function() {
    assert.isTrue(Model.prototype instanceof Backbone.Model);
  });

  it('parses the nested volumeInfo', function () {
    let model = new Model();
    let data = model.parse({
      "kind": "books#volume",
      "id": "4pgQfXQvekcC",
      "etag": "imlUmCyBxro",
      "selfLink": "https://www.googleapis.com/books/v1/volumes/4pgQfXQvekcC",
      "volumeInfo": {
        "title": "Learning Python",
        "authors": [
          "Mark Lutz"
        ],
        "publisher": "\"O'Reilly Media, Inc.\"",
        "publishedDate": "2013-06-1"
      },
    });
    assert.equal(_.result(data, 'title'), 'Learning Python');
  });
});

describe('View', function () {
  beforeEach(function () {
  });

  afterEach(function () {
  });

  it('initializes an instance of Collection', function (){
    let view = new View();

    assert.isTrue(view.collection instanceof Collection);
  });

  it('the view renders to the page', function () {
    $("body").append('<ul id="js-view-region"></ul>');

    let collection = new Collection();
    let view = new View({collection: collection});

    // I couldn't quite figure out howto stub/mock the ajax call, so this is to simulate a successful fetch
    collection.add({
      "kind": "books#volume",
      "id": "4pgQfXQvekcC",
      "etag": "imlUmCyBxro",
      "selfLink": "https://www.googleapis.com/books/v1/volumes/4pgQfXQvekcC",
      "title": "Learning Python",
      "authors": [
        "Mark Lutz"
      ],
      "publisher": "\"O'Reilly Media, Inc.\"",
      "publishedDate": "2013-06-1"
    });
    collection.trigger('sync');

    assert.isTrue($('#4pgQfXQvekcC').html() === "Learning Python");
  });

});
