module.export = (sequelize, Datatypes) => {const Comment = sequelize.define('Post', {
  // Model attributes are defined here
  text: {
    type: DataTypes.STRING,
    allowNull: false
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
Comment.associate = function(models){models.Comment.belongsTo(models.User,{foreignKey:{alllowNull: false}}); };
Comment.associate = function(models){models.Comment.belongsTo(models.Post,{foreignkey:{allowNull: false}}); };
return Comment;
}
