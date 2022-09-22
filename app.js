const express = require('express');
const xml2js = require('xml2js');
const request = require('request');
const app = express();
const fs = require('fs');
const https = require('https');
const nodeCron = require("node-cron");
require('dotenv').config();

app.get('/dummy', (req, res1) => {
    /*
    localhost:3000/
    */
    res1.send("This endpoint is working");
});

app.get('/all', (req, res1) => {
    /*
    localhost:3000/all
    */
    res1.end();
});

// By default the app runs at 3000 unless specified differently in the .env file
const port = process.env.PORT || 8000;

app.listen(port, () => console.log(`Server running on port ${port}`));

// app.get('/:id', (req, res) => {
//     /*
//     localhost:3000/uid
//     */

//     let uid = req.params.id;
//     retrieveSuccess(uid, res, req);    
//     // console.log(JSON.stringify(jin_raw));
// });

