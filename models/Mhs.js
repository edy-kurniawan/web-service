var koneksi = require('../koneksi');
const Sequelize = require('sequelize');
const Model = Sequelize.Model;

const Mhs = koneksi.define('mhs',
	{
		NIM: {
			type: Sequelize.STRING,
			allowNull: false,
			primaryKey:true
		},
		Nama: {
			type: Sequelize.STRING,
			allowNull: false
		}
},
{
	timestamps: true,
	freezeTableName: true,
	tableName: 'mhs' //nama table
}
);

module.exports=Mhs;