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
        //models.Post.belongsTo(models.Category,{foreignKey:{allowNull: false}});   en cours de dev
        //models.Post.hasMany(models.Like);                                         implementation :likes counter could be interesting
        models.Post.hasMany(models.Comment);
    };
    return Post;
}