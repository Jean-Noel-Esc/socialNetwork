
module.export = (sequelize, Datatypes) => {const Post = sequelize.define('Post', {
  // Model attributes are defined here
  text: {
    type: DataTypes.STRING,
    allowNull: false
  },
  picture: {
    type: DataTypes.STRING
    // allowNull defaults to true
  },
  status: {
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
}, {
  // Other model options go here
});
Post.associate = function(models){models.Post.belongsTo(models.User,{foreignKey:{alllowNull: false}}); };
Post.associate = function(models){models.Post.belongsTo(models.Category,{foreignkey:{allowNull: false}}); };
Post.associate = function(models){models.Post.belongsTo(models.Like,{foreignkey:{allowNull: false}}); };
return Post;
}
