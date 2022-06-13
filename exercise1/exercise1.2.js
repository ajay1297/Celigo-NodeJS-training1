'use strict'
const fs = require('fs/promises');
const convert = require('xml-js');
const options = {alwaysChildren: true, ignoreComment: true};

function parseXMLFile(filedata) {
    try {
        const data = convert.xml2json(filedata, options);
        return data;
    }
    catch(error) {
        throw new Error(error);
    }
}

async function getFile(filename) {
    try {
        const data = await fs.readFile(filename, 'utf-8');
        return data;
    }
    catch(error) {
        throw new Error(error);
    }
}

async function doTask(filename) {
    try {
        const data = await getFile(filename);
        const xmlParsed = parseXMLFile(data);
        console.log(xmlParsed);
    }
    catch(error) {
        console.log(error.message);
    }
}

doTask('xml-file2.xml');