# Generic-Seed
A project set up with node, grunt, bower & karma. Grunt is configured to launch a livereload server, perform sass compilation, js linting, and onchange karma testing. 

## Usage
Obtain a copy of this repo then reinit it's git:  

    cd generic-seed
    rm -rf .git README.md
    git init
    git add .
    git commit -m "init" 

Then utilise like so: 

    npm install  
    grunt

To fetch project dependencies using bower, (for example bootstrap) run: 
``bower install bootstrap``

Then include those dependencies in the ``index.html`` file.     

## Troubleshooting

You may need to reinstall node packages (e.g. if you copy the generic-seed folder locally):
	
	rm -fr node_modules
    npm i
    
For Sass Compilation to work you need to have ruby & the sass gem installed on the path: 
    
    sudo gem install sass
    
## Notes
Karma configuration (karma.conf) will pick up any javascript file, but will exclude javascript files in the bower_components folder unless specified as are angular.js, angular-routes.js, and angular-mocks.js by default.
