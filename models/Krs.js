var koneksi = require('../koneksi');
const Sequelize = require('sequelize');

const Krs = koneksi.define('krs',
 {
	 id_krs: {
	 type: Sequelize.STRING,
	 allowNull: false,
	 primaryKey:true
 	},
	 nim: {
	 type: Sequelize.STRING,
	 allowNull: false
 	},
 	kd_kelas: {
	 type: Sequelize.STRING,
	 allowNull: false
 	},
 	nilai_angka: {
	 type: Sequelize.DECIMAL,
	 allowNull: false
 	},
 	nilai_huruf: {
	 type: Sequelize.STRING,
	 allowNull: false
 	},
 	nilai_index: {
	 type: Sequelize.STRING,
	 allowNull: false
 	}
 },
 	{
 	timestamps:false,
 	freezeTableName: true,
	tableName: 'krs' //nama table
	 }
);

module.exports=Krs; 