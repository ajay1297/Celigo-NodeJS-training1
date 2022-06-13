'use strict'
const fs = require('fs/promises');
const parse = require('xml-parser');
const inspect = require('util').inspect;

function parseXMLFile(filedata) {
    try {
        const obj = parse(filedata);
        const data = inspect(obj, { colors: true, depth: Infinity });
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