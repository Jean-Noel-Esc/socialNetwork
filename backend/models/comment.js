module.exports = (sequelize, DataTypes) => {const Comment = sequelize.define('Comment', {
  // Model attributes are defined here
    text: DataTypes.STRING,
    status: DataTypes.INTEGER
}, {
  // Other model options go here
});
Comment.associate = function(models){
	models.Comment.belongsTo(models.User,{
		foreignKey:{alllowNull: false}
	}); 
	models.Comment.belongsTo(models.Post,{
		foreignkey:{allowNull: false}
	});
};
return Comment;
}
