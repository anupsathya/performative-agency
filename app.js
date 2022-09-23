const express = require('express');
const xml2js = require('xml2js');
const request = require('request');
const app = express();
const fs = require('fs');
const https = require('https');
const nodeCron = require("node-cron");
require('dotenv').config();

let dummyIn = {
    "performative": [{
        "prompt": "This is the first prompt",
        "option1": "This is the first option",
        "option2": "This is the second option",
        "option3": "This is the third option",
        "votes1": 0,
        "votes2": 0,
        "votes3": 0       
    },
    {
        "prompt": "This is the 2nd prompt",
        "option1": "This is the first option",
        "option2": "This is the second option",
        "option3": "This is the third option",
        "votes1": 0,
        "votes2": 0,
        "votes3": 0       
    },
    {
        "prompt": "This is the 3rd prompt",
        "option1": "This is the first option",
        "option2": "This is the second option",
        "option3": "This is the third option",
        "votes1": 0,
        "votes2": 0,
        "votes3": 0       
    },
    {
        "prompt": "This is the 4th prompt",
        "option1": "This is the first option",
        "option2": "This is the second option",
        "option3": "This is the third option",
        "votes1": 0,
        "votes2": 0,
        "votes3": 0       
    },
    {
        "prompt": "This is the 5th prompt",
        "option1": "This is the first option",
        "option2": "This is the second option",
        "option3": "This is the third option",
        "votes1": 0,
        "votes2": 0,
        "votes3": 0       
    },
    {
        "prompt": "This is the 6th prompt",
        "option1": "This is the first option",
        "option2": "This is the second option",
        "option3": "This is the third option",
        "votes1": 0,
        "votes2": 0,
        "votes3": 0       
    },
    {
        "prompt": "This is the 7th prompt",
        "option1": "This is the first option",
        "option2": "This is the second option",
        "option3": "This is the third option",
        "votes1": 0,
        "votes2": 0,
        "votes3": 0       
    },
    {
        "prompt": "This is the 8th prompt",
        "option1": "This is the first option",
        "option2": "This is the second option",
        "option3": "This is the third option",
        "votes1": 0,
        "votes2": 0,
        "votes3": 0       
    }]
}

var dummyOut = JSON.parse(JSON.stringify(dummyIn));
var dummyCounter = 1;
var promptCounter = 0;

app.get('/dummy', (req, res1) => {
    /*
    localhost:3000/
    */
    res1.send(dummyOut);
    dummyGenerator();
    dummyCounter += 1;
});

app.get('/all', (req, res1) => {
    /*
    localhost:3000/all
    */
    res1.end();
});

app.get('/dummyreset', (req, res1) => {
    /*
    localhost:3000/all
    */
    dummyReset();
    res1.send("The dummy JSON has been reset.");
});

// By default the app runs at 3000 unless specified differently in the .env file
const port = 8000;

app.listen(port, () => console.log(`Server running on port ${port}`));

// app.get('/:id', (req, res) => {
//     /*
//     localhost:3000/uid
//     */

//     let uid = req.params.id;
//     retrieveSuccess(uid, res, req);    
//     // console.log(JSON.stringify(jin_raw));
// });

function dummyGenerator() {
    dummyOut.performative[promptCounter].votes1 += Math.floor(Math.random() * 4);
    dummyOut.performative[promptCounter].votes2 += Math.floor(Math.random() * 4);
    dummyOut.performative[promptCounter].votes3 += Math.floor(Math.random() * 4);
    if (dummyCounter % 50 == 0) {
        promptCounter += 1;
        if (promptCounter == 8) {
            dummyReset();
        }
    }
}

function dummyReset() {
    dummyOut = JSON.parse(JSON.stringify(dummyIn));
    dummyCounter = 1;
    promptCounter = 0;
}

