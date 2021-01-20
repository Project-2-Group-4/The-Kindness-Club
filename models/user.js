
module.exports = function(sequelize, Sequelize) {
 
    var User = sequelize.define('user', {
        id: {
            autoIncrement: true,
            primaryKey: true,
            type: Sequelize.INTEGER
        },
        first_name: {
            type: Sequelize.STRING,
            notEmpty: true
        },
        last_name: {
            type: Sequelize.STRING,
            notEmpty: true
        },
        user_name: {
            type: Sequelize.TEXT,
            notEmpty: true
        },
        points:{
            type: Sequelize.INTEGER,
        },
        email: {
            type: Sequelize.STRING,
            validate: {
                isEmail: true
            }
        },
        badge_id: {
            type: Sequelize.INTEGER
            
        },
        password: {
            type: Sequelize.STRING,
            allowNull: false
        }

    });
   

    return User;
}