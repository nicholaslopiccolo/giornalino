"use strict";
let fs = require('fs');

let databasePath = __dirname + '/../database/database.json';

module.exports = {
    getLinks(callback){
        fs.readFile(databasePath, (err, data) => {
            if (err) throw err;
                
            callback(JSON.parse(data));
        });
    },
    addLink(link){
        // Store Link
        fs.readFile(databasePath, (err, data) => {
            if (err) throw err;
                
            let links = JSON.parse(data);
            links.push(link);
            fs.writeFileSync(databasePath,JSON.stringify(links));
        });
    }
}