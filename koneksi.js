const Sequelize = require('sequelize');

//Option 1: Parsing Parameter Separately
const koneksi = new Sequelize('webservice','root','', {
	hots: 'localhost',
	port: '3306',
	dialect: 'mariadb',
	dialectOptions:{
		useUTC:false,
		timezone: "Etc/GMT+7"
	}
});

koneksi
	.authenticate()
	.then(() => {
		console.log('berhasil konek');
	})
	.catch(err=> {
		console.error('gagal konek');
	});

module.exports=koneksi;