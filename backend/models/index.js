//param de connexion
const Sequelize = require('sequelize');
const path = require('path');
const basename = path.basename(__filename);
const fs = require('fs');

let sequelize;
let db = {};

// Option 2: Passing parameters separately (other dialects)
sequelize = new Sequelize('db_groupomania', 'root', '', {
  host: 'localhost',
  dialect: 'mysql'
});

//
sequelize.authenticate()
.then(()=>console.log("connection established"))
.catch((err)=>console.log("connection failed", err));

// recup tous les models dans le dossier model 
fs
.readdirSync(__dirname)
.filter(file=>{
	return(file.indexOf(".") !== 0) && (file!== basename) && (file.slice(-3) === ".js");
})
.forEach(file=>{
	const model = require(path.join(__dirname, file))(sequelize, Sequelize.DataTypes);
	db[model.name]=model;
} );
Object.keys(db).forEach(modelname=>{
	if (db[modelname].associate){
		db[modelname].associate(db);
	} 
});
db.sequelize = sequelize;
db.Sequelize = Sequelize;
module.exports = db;