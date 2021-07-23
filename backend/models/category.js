module.exports = (sequelize, DataTypes) => {const Category = sequelize.define('Category', {
    // Model attributes are defined here
    name: DataTypes.STRING

  }, {
    // Other model options go here
  });
  Category.associate = function(models){models.Category.hasMany(models.Post) };
  //Category.associate = function(models){models.Category.hasMany(models.Comments,{foreignkey:{allowNull: false}}); };
  //Category.associate = function(models){models.Category.hasMany(models.Likes,{foreignkey:{allowNull: false}}); };
  return Category;
  }