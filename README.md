1. Setting up Node.js and NPM

Make sure you have installed Git on your machine before you install Node.js.

- To install Node on your machine, go to https://nodejs.org and click on the Download button. Depending on your computer's platform (Windows, MacOS or Linux), the appropriate installation package is downloaded.

2. Verifying the Node Installation?

node -v  
npm -v

3.Initializing package.json

- npm init

  4.Install an NPM module, lite-server, that allows you to run a Node.js based development web server and serve up your project files. To do this, type the following at the prompt

  npm install lite-server --save-dev ` { "name": "git-test", "version": "1.0.0", "description": "This is the Git and Node basic learning project", "main": "index.html", "scripts": { "start": "npm run lite", "test": "echo \"Error: no test specified\" && exit 1", "lite": "lite-server" }, "repository": { "type": "git", "url": "git+https://jogesh_k_muppala@bitbucket.org/jogesh_k_muppala/git-test.git" }, "author": "", "license": "ISC", "homepage": "https://bitbucket.org/jogesh_k_muppala/git-test#readme", "devDependencies": { "lite-server": "^2.2.2" } } ` npm start
