const Handlebars = require('handlebars');

const xml = require('./exercise2-xml');
const data = require('./exercise2-data');

Handlebars.registerHelper('iterateFeature', function(options) {
    let attributes = [];
    for(let key in options) {
        attributes.push(`<feature>${options[key]}</feature>`);
    }
    let text = attributes.join("\n");
    return new Handlebars.SafeString(text);
});

Handlebars.registerHelper('iterateSearchTerms', function(options) {
    let attributes = [];
    for(let key in options) {
        attributes.push(`<searchTermValue>${options[key]}</searchTermValue>`);
    }
    let text = attributes.join("\n");
    return new Handlebars.SafeString(text);
});

Handlebars.registerHelper('iterateContentType', function(options) {
    let attributes = [];
    for(let key in options) {
        attributes.push(`<contentTypeValue>${options[key].value}</contentTypeValue>`);
    }
    
    let text = attributes.join("\n");
    return new Handlebars.SafeString(text);
});

const template = Handlebars.compile(xml);
const result = template(data);
console.log(result);