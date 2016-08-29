# Setup

### Install libraries

    npm install
    npm install -g webpack webpack-dev-server

Visit the dev server at ``http://localhost:8080/`` after running;

    webpack-dev-server

### Compile code

1. ``npm run build`` to compile the javaScript
2. ``npm run watch`` to automatically compile the code after any changes to the javaScript


### Tests

The tests use mocha, sinon and chai and run purely in node using jsdom for a browser mock. You can still use and test jQuery selectors and everything else you would normally use in a browser.

1. ``npm run build:test`` to compile the javaScript tests
2. ``npm run watch:test`` to automatically compile the code after any changes to the tests
3. ``npm run test`` to run the mocha tests in node
4. ``npm run test:debug`` to run the mocha tests in debugger mode which will stop on ``debugger;`` statements. Type ``repl`` at these points to print out variables and such. For more information on debugging in node check out https://nodejs.org/api/debugger.html.

Note: check out tests/run.js and note that 'sinon' and 'chai' are global. You can simply use them as if you had already imported them.

Adding test files:

1. Make a new entry in webpack.config.test (add to config.entry)
2. Require this file at the bottom of tests/run.js
3. Restart any 'watch' commands you may be running

# The tasks
    1. Fetch book data from the following endpoint within the Collection,
    - https://www.googleapis.com/books/v1/volumes?q=python

    2. Store individual book items inside Models

    3. Display book items using the View and underscore template, add any additional views or templates you want.

    4. Write tests for all your code.



