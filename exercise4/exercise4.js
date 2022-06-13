'use strict'
const async = require('async');
const request = require('request');
const fs = require('fs');
const path = require('path');
const compressing = require('compressing');

const imageUrls = [
    "https://doodleart.redbull.com/assets/managed/entries/processed/sm/367010617181759_36211000.jpg",
    "https://www.justcolor.net/wp-content/uploads/sites/1/nggallery/doodle-art-doodling/coloring-page-adults-doodle-art-rachel.jpg",
    "https://i.pinimg.com/originals/e5/55/a3/e555a39ca5457a079a9bcce59f61f8d5.jpg",
    "https://i.pinimg.com/originals/ef/4c/91/ef4c91fb73e61e19211a0589187ccaa6.jpg",
    "https://static.vecteezy.com/system/resources/previews/000/107/464/non_2x/huge-doodle-vector-pack.jpg",
    "http://sousmonarbre.com/qphj/bd963843d2239ed78aa6f7b0a36b537d/qdp/shapely-table-mat-design-office-bay-decoration-mes-at-work-decorating-ideas-office-decoration-mes-design-ideas-cream-wall-paint-decoration-messroom-wooden-laminate-ing-tosca-color__office-decorating-ideas.jpg",
    "https://i.ytimg.com/vi/O5u1apUkYV0/maxresdefault.jpg",
    "http://canhotopazelite.info/wp-content/uploads/2018/08/office-bay-decoration-themes-with-office-bay-decoration-themes-elegant-yet-fun-office-bay-decoration-14.jpg",
    "https://media.glassdoor.com/l/e9/c1/7a/84/independence-day-celebration.jpg"
]


function parseImages(url, key, callback) {
    request({
        url,
        headers: {
            'Content-Type': 'image/jpeg',
        },
        encoding:'binary'}, (error, response, body) => {
        if(error || response.statusCode != 200) {
            callback(error);
            return ;
        }
        else {
            fs.exists(`./images${Math.floor(key/5)}`, (isFolderThere) => {
                if(isFolderThere) {
                    fs.writeFile(`./images${Math.floor(key/5)}/image${key}.jpg`,response.body, 'binary',(error) => {
                        if(error) {
                            callback(error)
                            return ;
                        }
                        compressing.gzip.compressFile(`${__dirname}/images${Math.floor(key/5)}/image${key}.jpg`, `${__dirname}/images${Math.floor(key/5)}/image${key}.gz`)
                            .then(() => { 
                                fs.unlinkSync(`${__dirname}/images${Math.floor(key/5)}/image${key}.jpg`);
                                console.log(`${key} => ${url}`)
                                callback();
                            })
                            .catch((error) => {
                                callback(error);
                                return ;
                            });
                    })
                }
                else {
                    fs.mkdir(`./images${Math.floor(key/5)}`, (error) => {
                        if(error) {
                            callback(error)
                            return ;
                        }
                        fs.writeFile(`./images${Math.floor(key/5)}/image${key}.jpg`,response.body, 'binary',(error) => {
                            if(error) {
                                callback(error)
                                return ;
                            }
                            compressing.gzip.compressFile(`${__dirname}/images${Math.floor(key/5)}/image${key}.jpg`, `${__dirname}/images${Math.floor(key/5)}/image${key}.gz`)
                            .then(() => {
                                fs.unlinkSync(`${__dirname}/images${Math.floor(key/5)}/image${key}.jpg`);
                                console.log(`${key} => ${url}`)
                                callback() 
                            })
                            .catch((error) => {
                                callback(error);
                                return ;
                            });
                        })
                    })
                }
            })
        }
    })
}

async function loadImages() {
    try {
        let data = await async.eachOf(imageUrls, async.reflect(parseImages));
    }
    catch(error) {
        console.log(error);
    }
}

loadImages();