module.exports = function (sequelize, Sequelize) {

    var User = sequelize.define('User', {
    
        first_name: {
            type: Sequelize.STRING,
            notEmpty: true
        },
        last_name: {
            type: Sequelize.STRING,
            notEmpty: true
        },
        user_name: {
            type: Sequelize.TEXT
        },
        bio: {
            type: Sequelize.TEXT
        },
        email: {
            type: Sequelize.STRING,
            validate: {
                isEmail: true
            }
        },
        password: {
            type: Sequelize.STRING,
            allowNull: false
        }

    });


    User.associate = function (models) {

        User.belongsTo(models.Badge)
       
    }
  return User;
};
    
    


// user has 1 badge 
// badge belongs to user

    


