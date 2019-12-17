var express = require('express');
var router = express.Router();

var token = require("../token") 

/* GET home page. */
router.get('/',token, function(req, res, next) {
  res.render('index', { title: 'Express' });
});

module.exports = router;
