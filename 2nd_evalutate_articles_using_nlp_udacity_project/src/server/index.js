// This will help us to start the node app with dotenv preloaded so we don't even need to require dotenv in your source code.
const dotenv = require("dotenv");
dotenv.config();

const fetch = require('node-fetch');

// The path module provides utilities for working with file and directory paths. To access it we can use:
var path = require('path');

// Using Express we set up an instance of our web app. 
const express = require('express');

const mockAPIResponse = require('./mockAPI.js')

// Start up an instance of app
const app = express();

// Initialize the main project folder
app.use(express.static("dist"));


const bodyParser = require('body-parser')
app.use(bodyParser.urlencoded({ extended: false}))
app.use(bodyParser.json())

// Cors for cross origin allowance
const cors = require('cors');
app.use(cors());


/* Middleware*/
//Here we are configuring express to use body-parser as middle-ware.
// app.use(express.urlencoded({ extended: true }));
// app.use(express.json());


// require API key
const API_KEY = process.env.API_KEY;



// In the get route we will send the response to 
// the endpoint which is the index.html in dist folder
app.get("/", function (req, res) {
    // res.sendFile("dist/index.html");
    // fixing error: path must be absolute or specify root to res.sendFile
    // https://stackoverflow.com/questions/26079611/node-js-typeerror-path-must-be-absolute-or-specify-root-to-res-sendfile-failed
    res.sendFile('index.html', { root: __dirname });
});

const port = 8082;
const server = app.listen(8082, function () {
    console.log(`App listening on port 8082`);
    if (process.env.API_KEY) {
      console.log(`Your API key is ${process.env.API_KEY}`);
    } else {
      console.error("Please include a valid API key");
    }
  });

// test api
app.get('/test', function (req, res) {
    res.send(mockAPIResponse)
});

// Setup empty JS object to act as endpoint for all routes
let projectData = {};

app.post('/meaningCloud', async (req, res) => {
    //  here we set a variable to hold the fetch calls return
    //  the await keyword will tell the script not to go on to the next part until
    //  it's received the data that it needs, because our fetch call is calling to a Web API
        const baseURL = 'https://api.meaningcloud.com/sentiment-2.1';    
        console.log(baseURL)
        const response = await fetch(`${baseURL}?key=${process.env.API_KEY}&url=${req.body.url}&lang=en`);
        console.log('response url:', response);
    // If everything goes well and we get our data back, 
    //  we want to get a new data that is in JSON format.
        try {
    // So this .json is a method that's just giving us our data in JSON
            const newData = await response.json();
            console.log(newData);
            projectData = newData;
            res.send(newData);
    // if geting data does not go well we will get an error using catch keyword
        } catch (error) {
            console.log("error", error);
        }
    });

// GET
app.get('/meaningCloud', function (req, res) {
    res.send(projectData)
    console.log('app get')
})    