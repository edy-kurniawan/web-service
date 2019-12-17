var koneksi = require('../koneksi');
const Sequelize = require('sequelize');

const Jadwal = koneksi.define('jadwal',
 {
	 kd_kelas: {
	 type: Sequelize.STRING,
	 allowNull: false,
	 primaryKey:true
 	},
	 kd_mk: {
	 type: Sequelize.STRING,
	 allowNull: false
 	},
 	nidn: {
	 type: Sequelize.STRING,
	 allowNull: false
 	},
 	hari: {
	 type: Sequelize.STRING,
	 allowNull: false
 	},
 	jam: {
	 type: Sequelize.TIME,
	 allowNull: false
 	},
 	ruang: {
	 type: Sequelize.STRING,
	 allowNull: false
 	}
 },
 	{
 	timestamps:false,
 	freezeTableName: true,
	tableName: 'jadwal' //nama table
	 }
);

module.exports=Jadwal; 