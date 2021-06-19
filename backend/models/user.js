
module.export = (sequelize, Datatypes) => {const User = sequelize.define('User', {
  // Model attributes are defined here
  firstName: {
    type: DataTypes.STRING,
    allowNull: false
  },
  lastName: {
    type: DataTypes.STRING
    // allowNull defaults to true
  },
  email: {
    type: DataTypes.STRING
    // allowNull defaults to true
  },
  password: {
    type: DataTypes.STRING
    // allowNull defaults to true
  },
  role: {
    type: DataTypes.INTEGER//no tinyint use integer
    // allowNull defaults to true
  },
  createdAt: {
    type: DataTypes.DATETIME
    // allowNull defaults to true
  },
  updatedAt: {
    type: DataTypes.DATETIME
    // allowNull defaults to true
  }
  picture: {
    type: DataTypes.STRING
    // allowNull defaults to true
  }

}, {
  // Other model options go here
});
User.associate = function(models){models.User.hasMany(models.Post,{foreignKey:{alllowNull: false}}); };
User.associate = function(models){models.User.hasMany(models.Comment,{foreignkey:{allowNull: false}}); };
User.associate = function(models){models.User.hasMany(models.Like,{foreignkey:{allowNull: false}}); };
return User;
}


