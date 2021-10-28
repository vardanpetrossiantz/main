// The path module provides utilities for working with file and directory paths. To access it we can use:
const path = require('path');

// This will help us to start the node app with dotenv preloaded so we don't even need to require dotenv in your source code.
const dotenv = require("dotenv");
dotenv.config();

// Cors for cross origin allowance
const cors = require('cors');


// Using Express we set up an instance of our web app. 
const express = require('express');
// Start up an instance of app
const app = express();

/* Middleware*/
//Here we are configuring express to use body-parser as middle-ware.
app.use(express.urlencoded({ extended: true }));


const mockAPIResponse = require('./mockAPI.js')

// require API key
const API_KEY = process.env.API_KEY;

// Initialize the main project folder
app.use(express.static("dist"));

const fetch = require('node-fetch');

app.use(express.json());
app.use(cors());

const baseURL = 'https://api.meaningcloud.com/sentiment-2.1';

// In the get route we will send the response to 
// the endpoint which is the index.html in dist folder
app.get("/", function (req, res) {
    res.sendFile("dist/index.html");
});

app.listen(8080, function () {
    console.log(`App listening on port 8080`);
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

app.post('/all', async (req, res) => {
    //  here we set a variable to hold the fetch calls return
    //  the await keyword will tell the script not to go on to the next part until
    //  it's received the data that it needs, because our fetch call is calling to a Web API
        const response = await fetch(`${baseURL}?key=${API_KEY}&lang=auto&url=${req.body}`);
        console.log('response url:', response);
    // If everything goes well and we get our data back, 
    //  we want to get a new data that is in JSON format.
        try {
    // So this .json is a method that's just giving us our data in JSON
            const newData = await response.json();
            console.log(newData);
            res.send(newData);
    // if geting data does not go well we will get an error using catch keyword
        } catch (error) {
            console.log("error", error);
        }
    });
    