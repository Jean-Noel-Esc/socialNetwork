module.exports = (sequelize, DataTypes) => {const Post = sequelize.define('Post', {
    // Model attributes are defined here
    title: DataTypes.STRING,
    text: DataTypes.STRING,
    picture: DataTypes.STRING,
    status: DataTypes.INTEGER
}, {
    // Other model options go here
});
    Post.associate = function(models){
        models.Post.belongsTo(models.User,{foreignKey:{allowNull: false}});
        models.Post.hasMany(models.Comment);
    };
    return Post;
}