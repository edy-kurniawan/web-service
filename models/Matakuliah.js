var koneksi = require('../koneksi');
const Sequelize = require('sequelize');

const Matakuliah = koneksi.define('Matakuliah',
 {
	 kd_mk: {
	 type: Sequelize.STRING,
	 allowNull: false,
	 primaryKey:true
 	},
	 nama_mk: {
	 type: Sequelize.STRING,
	 allowNull: false
 	},
 	sks: {
	 type: Sequelize.DECIMAL,
	 allowNull: false
 	}
 },
 	{
 	timestamps:false,
 	freezeTableName: true,
	tableName: 'matakuliah' //nama table
	 }
);

module.exports=Matakuliah; 