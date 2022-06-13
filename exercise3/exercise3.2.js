'use strict';
const request = require('request');
const fs = require('fs');
const writeStream = fs.createWriteStream('stream.txt');
const URL = "https://google.com";


async function storePage() {
    try {
        let responseEvent = request(URL)
        responseEvent.on('response', (resp) => {
            console.log("Response Receiver "+resp);
        })
        responseEvent.on('finish', (resp) => {
            console.log("finish  ");
        })
        responseEvent.on('end', (resp) => {
            console.log("end ");
        })
        responseEvent.on('data', (resp) => {
            console.log("data  ");
        })
        responseEvent.pipe(writeStream);
    }
    catch(error) {
        console.log(error.message);
    }
}

storePage()