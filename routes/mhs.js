var express = require('express');
var router = express.Router();
var token = require("../token");
var Mhs	= require('../models/Mhs');

/* GET User Data. */
router.get('/',token, function(req, res, next) {
  Mhs.findAll().then (data=> {
  	res.json({
  		status:true,
  		data:data
  	});
  })
  .catch(err=>{
  	res.status(500).json({
  		status:false,
  		data:err.message
  	});
  })

});

/* POST User Data. */
router.post('/',token, function(req, res, next) {
  Mhs.create(req.body).then (data=> {
    res.json({
      status:true,
      data:data
    });
  })
  .catch(err=>{
    res.status(500).json({
      status:false,
      data:err.message
    });
  })

});

/* Update User Data. */
router.put('/',token, function(req, res, next) {
  Mhs.update(req.body,{
    where:{NIM:req.body.NIM}
  }).then(()=> {
    res.json({
      status:true
    });
  })
  .catch(err=>{
    res.status(500).json({
      status:false,
      data:err.message
    });
  })

});

/* Delete User Data. */
router.delete('/',token, function(req, res, next) {
  Mhs.destroy({
    where:{NIM:req.body.NIM}
  }).then(()=> {
    res.json({
      status:true
    });
  })
  .catch(err=>{
    res.status(500).json({
      status:false,
      data:err.message
    });
  })

});

module.exports = router;
