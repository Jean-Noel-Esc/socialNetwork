
module.exports = (sequelize, DataTypes) => {const User = sequelize.define('User', {
  // Model attributes are defined here
  firstname: DataTypes.STRING,
  lastname: DataTypes.STRING,
  email:  DataTypes.STRING,
  password: DataTypes.STRING,
  role: DataTypes.INTEGER,
}, {
  // Other model options go here
});
User.associate = function(models){models.User.hasMany(models.Post) };
//User.associate = function(models){models.User.hasMany(models.Comment) };
User.associate = function(models){models.User.hasMany(models.Like) };
return User;
}


