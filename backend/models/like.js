module.exports = (sequelize, DataTypes) => {const Like = sequelize.define('Like', {
    // Model attributes are defined here
}, {
    // Other model options go here
});
    Like.associate = function(models){models.Like.belongsTo(models.User,{foreignKey:{allowNull: false}}) };
    Like.associate = function(models){models.Like.belongsTo(models.Post,{foreignKey:{allowNull: false}}) };
    
    return Like;
    }