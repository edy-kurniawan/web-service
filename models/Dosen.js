var koneksi = require('../koneksi');
const Sequelize = require('sequelize');

const Dosen = koneksi.define('dosen',
 {
	 nidn: {
	 type: Sequelize.STRING,
	 allowNull: false,
	 primaryKey:true
 	},
	 nama: {
	 type: Sequelize.STRING,
	 allowNull: false
 	},
 	gelar_depan: {
	 type: Sequelize.STRING,
	 allowNull: false
 	},
 	gelar_belakang: {
	 type: Sequelize.STRING,
	 allowNull: false
 	}
 },
 	{
 	timestamps:false,
 	freezeTableName: true,
	tableName: 'dosen' //nama table
	 }
);

module.exports=Dosen; 