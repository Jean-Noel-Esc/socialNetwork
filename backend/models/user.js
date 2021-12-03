
module.exports = (sequelize, DataTypes) => {const User = sequelize.define('User', {
  // Model attributes are defined here
  firstname: DataTypes.STRING,
  lastname: DataTypes.STRING,
  email:  DataTypes.STRING,
  password: DataTypes.STRING,
  role: DataTypes.INTEGER,
},);
User.associate = function(models){
  models.User.hasMany(models.Post); 
  models.User.hasMany(models.Comment); 
  //models.User.hasMany(models.Like) 
  };
return User;
}


