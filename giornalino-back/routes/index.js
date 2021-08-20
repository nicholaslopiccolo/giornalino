var express = require('express');
var router = express.Router();

let links = require('../controllers/controller.links')

/* GET home page. */
router.get('/', function(req, res) {
  res.render('index');
});

router.get('/links',links.getLinks)
//router.delete('/links',links.rmLink)
router.post('/links',links.addLink)

module.exports = router;
