module.exports = function(sequelize, DataTypes) {
 
    var User = sequelize.define('User', {
        FirstName: {
            type: DataTypes.STRING,
            notEmpty: true
        },
        LastName: {
            type: DataTypes.STRING,
            notEmpty: true
        },
        UserName: {
            type: DataTypes.TEXT,
            notEmpty: true
        },
        Points:{
            type: DataTypes.INTEGER,
        },
        Email: {
            type: DataTypes.STRING,
            validate: {
                isEmail: true
            }
        },
        Password: {
            type: DataTypes.STRING,
            allowNull: false
        }

    });

    User.associate = function(models) {
        // We're saying that a Post should belong to an Author
        // A Post can't be created without an Author due to the foreign key constraint
        User.belongsTo(models.Badge, {
          foreignKey: {
            allowNull: true
          }
        });
      };
   
    return User;
}