module.exports = (sequelize, DataTypes) => {const Post = sequelize.define('Post', {
    // Model attributes are defined here
    text: DataTypes.STRING,
    status: DataTypes.INTEGER
}, {
    // Other model options go here
});
    Post.associate = function(models){models.Post.belongsTo(models.User,{foreignKey:{allowNull: false}}) };
    Post.associate = function(models){models.Post.belongsTo(models.Category,{foreignKey:{allowNull: false}}) };
    //Post.associate = function(models){models.Post.hasMany(models.Likes,{foreignkey:{allowNull: false}}); };
   //Post.associate = function(models){models.Post.hasMany(models.Comments,{foreignkey:{allowNull: false}}); };
    return Post;
    }