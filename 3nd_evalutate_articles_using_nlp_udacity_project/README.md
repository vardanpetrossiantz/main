# Project: Evaluate Articles with NLP

## Setup webpack from stratch
I have created a new folder and added following command in my prompt to fill the folder with correct webpack structure. 

mkdir webpack-demo
cd webpack-demo
npm init -y
npm install -g webpack webpack-cli 
mkdir src
mkdir test
type nul > .env
type nul > .gitignore
type nul > webpack.dev.js
type nul > webpack.prod.js
type nul > README.md
cd src
mkdir client server 
cd client
mkdir js styles views
type nul > index.js
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
    "build-prod": "rimraf dist && webpack --config webpack.prod.js",
    "build-dev": "webpack-dev-server  --config webpack.dev.js --open"
  },

## Install all dependencies needed during the project
After goinh through the same project multiple times I have figured out which installations are needed to have a complete package of dependencies
npm install --save-dev @babel/core@7.10.5
npm install --save-dev @babel/preset-env@7.10.4
npm install --save-dev babel-loader@8.1.0
npm install --save-dev clean-webpack-plugin@3.0.0
npm install --save-dev css-loader@4.1.1
npm install --save-dev html-webpack-plugin@3.2.0
npm install --save-dev jest@26.2.2
npm install --save-dev mini-css-extract-plugin@0.9.0
npm install --save-dev node-sass@4.14.1
npm install --save-dev optimize-css-assets-webpack-plugin@5.0.3
npm install --save-dev sass-loader@9.0.2
npm install --save-dev style-loader@1.2.1
npm install --save-dev terser-webpack-plugin@3.0.8
npm install --save-dev webpack-dev-server@3.11.0

npm install --save axios@0.19.2
npm install --save body-parser@1.19.0
npm install --save cors@2.8.5
npm install --save dotenv@8.2.0
npm install --save express@4.17.1
npm install --save request@2.88.2
npm install --save webpack@4.35.3
npm install --save webpack-cli@3.3.5
npm install --save workbox-webpack-plugin@5.1.3


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