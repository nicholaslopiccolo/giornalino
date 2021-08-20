let links = require('../models/model.links');

module.exports = {
    getLinks(req,res){
        //let list = await links.getLinks();
        res.send(links.getLinks())
    },
    addLink(req,res){
        links.addLink();
        res.status(200).send('Ok!');
    }
}