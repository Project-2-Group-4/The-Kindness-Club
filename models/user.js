module.exports = function(sequelize, DataTypes) {
 
    var User = sequelize.define('User', {
        FirstName: {
            type: DataTypes.STRING
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
            defaultValue: 0
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
        })

        User.associate = function(models) {
            // We're saying that a Post should belong to an Author
            // A Post can't be created without an Author due to the foreign key constraint
            User.belongsTo(models.Badge, {
              foreignKey: {
                allowNull: false
              }
            });
          };
       
        return User;
    
    }


// user has 1 badge 
// badge belongs to user

    


