var koneksi = require('../koneksi');
const Sequelize = require('sequelize');

const Login = koneksi.define('user',
 {
	 user: {
	 type: Sequelize.STRING,
	 allowNull: false,
	 primaryKey:true
 	},
	 pass: {
	 type: Sequelize.STRING,
	 allowNull: false
 	}
 },
 	{
 	timestamps:false,
 	freezeTableName: true,
	tableName: 'user' //nama table
	 }
);

module.exports=Login; 