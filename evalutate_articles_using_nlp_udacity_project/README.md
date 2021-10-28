# Project: Evaluate Articles with NLP

## Setup webpack from stratch
I have created a new folder and added following command in my prompt to fill the folder with correct webpack structure. 

mkdir webpack-demo
cd webpack-demo
npm init -y
npm install -g webpack webpack-cli 
mkdir src
mkdir __test__
type nul > .env
type nul > .gitignore
type nul > webpack.dev.js
type nul > webpack.prod.js
type nul > README.md
cd src
mkdir client server 
cd client
mkdir js styles views
type nul > Index.js
cd js
type nul > formHandler.js
type nul > urlValidator.js
cd ..
cd styles
type nul > main.scss 
cd ..
cd views
type nul > index.html
cd ../..
cd server
type nul > index.js
type nul > mockAPI.js
npm i webpack webpack-cli
npm i express
npm i 

## add scripts in package json and create dev and prod envrionments
I have added following script from the beginning, as it is easier to do this division from the beginning
  "scripts": {
    "test": "jest",
    "start": "node src/server/index.js",
    "build-prod": "webpack --config webpack.prod.js",
    "build-dev": "webpack-dev-server  --config webpack.dev.js --open"
  },

## Install all dependencies needed during the project
After goinh through the same project multiple times I have figured out which installations are needed to have a complete package of dependencies
npm install --save cors
npm install --save body-parser
npm install --save node-fetch
npm install --save dotenv
npm install --save express
npm install --save webpack webpack-cli 
npm install --save-dev @babel/core @babel/cli
npm install --save-dev @babel/preset-env
npm install --save-dev babel-loader
npm install --save-dev clean-webpack-plugin
npm install --save-dev file-loader
npm install --save-dev style-loader node-sass css-loader sass-loader
npm install --save-dev html-loader
npm install --save-dev html-webpack-plugin
npm install --save-dev jest
npm install --save-dev mini-css-extract-plugin 
npm install --save-dev css-minimizer-webpack-plugin
npm install --save-dev terser-webpack-plugin
npm install --save-dev url-loader
npm install --save-dev webpack-dev-server
npm install --save-dev workbox-webpack-plugin


## Setup both dev and prod environments' webpack.js files
Include all necessary rules and plugins both for prod and dev environments

## Fill out index.html, mockAPI.js and .env
Take content for index.html and mockAPI.js from the starter code of Udacity
We also need to add following script in the end of the html file so that we reference main.js from index.html
<script type="text/javascript" src="../../../dist/main.js"></script>
Add the API key in .env which I have got from the MeaningCloud 


## Setup server
We need to require path module, dotenv, cors, express, middleware, mockAPI, node-fetch.
We should also add my API key reference, initialize main project folder, setup get route, add server port and post method.

## Setup client side
Create URL Validator with regex, using example of meaningcloud try to get "irony" category results from NLP (https://api.meaningcloud.com/sentiment-2.1?key=566b1bc948cd3f0ca327abc369356a63&of=json&txt=news.&model=general&lang=en).
adjust UI and show extracted results.