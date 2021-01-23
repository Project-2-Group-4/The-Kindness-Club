const apiTask_routes = require("../routes/api-task_routes");

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
   


    User.associate = function (models) {

        User.belongsTo(models.Badge)
       User.belongsTo(models.Tasks)       
    }
  return User;
};
    
    


// user has 1 badge 
// badge belongs to user

    


