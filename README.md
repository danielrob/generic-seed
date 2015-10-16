# Generic-Seed
A project set up with node, grunt, bower & karma. Grunt is configured to launch a livereload server, perform sass compilation, js linting, and onchange karma testing. 

## Usage
``$ npm install``  
``$ grunt``

Bower to fetch project dependencies (e.g. bootstrap):  
``$ bower install bootstrap``

Then include those dependencies in the ``index.html`` file. 

## Notes
Karma configuration (karma.conf) will pick up any javascript file, but will exclude javascript files in the bower_components folder unless specified as are angular.js, angular-routes.js, and angular-mocks.js by default.