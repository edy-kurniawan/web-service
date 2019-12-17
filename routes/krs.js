var express = require('express');
var router = express.Router();
var Krs	= require('../models/Krs');

/* GET User Data. */
router.get('/', function(req, res, next) {
  Krs.findAll().then (data=> {
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
  Krs.create(req.body).then (data=> {
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
  Krs.update(req.body,{
    where:{id_krs:req.body.id_krs}
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
  Krs.destroy({
    where:{id_krs:req.body.id_krs}
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
