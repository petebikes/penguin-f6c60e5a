/*
  Entry point for all mocha tests that run in node
    - This sets up a few requirements as globals which don't play well with webpack
    - Creates a mocked browser DOM via jsdom, allows you to use jQuery DOM manipulation
      as you would in a browser, in your tests.
*/

global.jsdom = require('jsdom');
global.sinon = require('sinon');
global.chai = require('chai');

global.document = jsdom.jsdom('<!DOCTYPE html><html><head></head><body></body></html>');
global.window = document.defaultView;
global.navigator = window.navigator;

global.sinon = require('sinon');
global.sinon.useFakeXMLHttpRequest();
global.window.XMLHttpRequest = global.XMLHttpRequest;

// Stub out the native browser function 'Element' 
// which the react package clipboard.js expects to exist.
var BrowserElement = function matches() {};
BrowserElement.prototype.matches = {};
global.Element = BrowserElement;

// Add new test files here
require('./build/testExamplePage.js');