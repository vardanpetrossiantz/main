// This will help us to start the node app with dotenv preloaded so we don't even need to require dotenv in your source code.
const dotenv = require("dotenv");
dotenv.config();

// The path module provides utilities for working with file and directory paths. To access it we can use:
var path = require('path');

// require a promise-based HTTP Client for node
var axios = require('axios');
var request = require("request");

// Using Express we set up an instance of our web app. 
const express = require('express');

// Start up an instance of app
const app = express();

// Initialize the main project folder
app.use(express.static('dist'))


console.log(__dirname)

// require API key
let apiKey = "566b1bc948cd3f0ca327abc369356a63";

/* Middleware*/
const bodyParser = require('body-parser')
app.use(bodyParser.urlencoded({ extended: false}))
app.use(bodyParser.json())

// Cors for cross origin allowance
const cors = require('cors');
app.use(cors());

// test api
app.get('/test', function (req, res) {
    res.send(mockAPIResponse)
});

// In the get route we will send the response to 
// the endpoint which is the index.html in dist folder
app.get("/", function (req, res) {
    // res.sendFile("dist/index.html");
    // fixing error: path must be absolute or specify root to res.sendFile
    // https://stackoverflow.com/questions/26079611/node-js-typeerror-path-must-be-absolute-or-specify-root-to-res-sendfile-failed
    res.sendFile('index.html', { root: __dirname });
});

// designates what port the app will listen to for incoming requests
const server = app.listen(8092, function () {
    console.log(`App listening on port 8092`);
    if (process.env.API_KEY) {
      console.log(`Your API key is ${process.env.API_KEY}`);
    } else {
      console.error("Please include a valid API key");
    }
  });

app.post('/analyse', async(req, res) => {
    try {
        const baseURL = 'https://api.meaningcloud.com/sentiment-2.1';    
        console.log(baseURL)
        const analyse = await axios.post(`${baseURL}?key=${apiKey}&lang=en&txt=${req.body.entryUrl}&model=general`);
        console.log('response url:', analyse);

        const { data } = analyse;

        const { model } = data;
        const { subjectivity } = data;
        const { score_tag } = data;
        const { agreement } = data;
        const { irony } = data;
        const { sentence_list } = data;
        const { confidence } = data;

        newData = {
            score_tag,
            irony,
            sentence_list,
            agreement,
            subjectivity,
            confidence,
            model,
        };

        res.send(newData);
        console.log(data)
    // if geting data does not go well we will get an error using catch keyword
    } catch (error) {
        console.log("error", error);
    }
});

app.get('/meaningCloud', function (req, res) {    res.send(newData);
    console.log(`app get ${newData}`);
});


