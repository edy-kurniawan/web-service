var express = require('express');
var router = express.Router();
var Makul	= require('../models/Matakuliah');

/* GET User Data. */
router.get('/', function(req, res, next) {
  Makul.findAll().then (data=> {
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
router.post('/', function(req, res, next) {
  Makul.create(req.body).then (data=> {
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
router.put('/', function(req, res, next) {
  Makul.update(req.body,{
    where:{kd_mk:req.body.kd_mk}
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
router.delete('/', function(req, res, next) {
  Makul.destroy({
    where:{kd_mk:req.body.kd_mk}
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
