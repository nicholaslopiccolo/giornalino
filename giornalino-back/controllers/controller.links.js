let links = require('../models/model.links');

module.exports = {
    getLinks(req,res){
        //let list = await links.getLinks();
        links.getLinks((links)=>{
            res.send(links);
        });
    },
    addLink(req,res){
        links.addLink(req.body);
        res.status(200).send('Ok!');
    }
}