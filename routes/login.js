var express = require('express');
var router = express.Router();
var koneksi = require('../koneksi');
var login = require('../models/Login');
var crypto = require('crypto');
const Sequelize = require('sequelize');
const Op = Sequelize.Op;
var jwt = require("jsonwebtoken");
var kode_aman = 'diisiTerserahYangPenting32Digit';
var sha1 = require('sha1');

router.post('/login', function(req, res, next) {

 var user_diterima = req.body.user;
 var pass_diterima = sha1(req.body.pass);
 
 var dataLogin = 
 	{
 user: user_diterima,
 pass: pass_diterima
 		}
 
 login.findOne({

 where:{
 [Op.and]:[ dataLogin ]
 }
 }).then ( (data)=>{

 if (data){

	 jwt.sign( { data_login: data }, kode_aman, (err, tokenBaru) => {
	 res.json({
	 status : true,
	 pesan : "Berhasil login",
	 data : { token: tokenBaru },
	 });
 });
	 } else {
	 res.status(500).json({
	 status:false,
	 data:"Username atau Password Salah!"
	 });
	 }
 })
	 .catch(err => {
	 res.status(500).json({
	 status:false,
	 data:err.message
	 });
	 });
});

module.exports = router; 