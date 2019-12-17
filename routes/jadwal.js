var express = require('express');
var router = express.Router();
var token = require("../token");
var Jadwal	= require('../models/Jadwal');

/* GET User Data. */
router.get('/',token, function(req, res, next) {
  Jadwal.findAll().then (data=> {
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
  Jadwal.create(req.body).then (data=> {
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
  Jadwal.update(req.body,{
    where:{nidn:req.body.nidn}
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
  Jadwal.destroy({
    where:{nidn:req.body.nidn}
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
