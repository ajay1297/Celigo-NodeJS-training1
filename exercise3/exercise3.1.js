'use strict'
const request = require('request');
const fs = require('fs/promises');
const util = require('util');
const requestP = util.promisify(request);
const URL = "https://google.com";

async function downloadPage() {
    try {
        let { body, response } = await requestP(URL);
        console.log(response);
        return body;
    }
    catch(error) {
        console.log(error.message);
        throw new Error(error);
    }
}

async function doTask() {
    try {
        let page = await downloadPage();
        await fs.writeFile('file.html', page, 'utf-8');
    }
    catch(error) {
        console.log(error.message);
    }
}

doTask();