var express = require('express');
var router = express.Router();
var token = require("../token");
var Dosen	= require('../models/Dosen');

/* GET User Data. */
router.get('/',token, function(req, res, next) {
  Dosen.findAll().then (data=> {
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
  Dosen.create(req.body).then (data=> {
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
  Dosen.update(req.body,{
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
  Dosen.destroy({
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
