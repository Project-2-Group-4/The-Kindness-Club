
module.exports = function(sequelize, Sequelize) {
 
    var Badge = sequelize.define('badge', {
        id: {
            autoIncrement: true,
            primaryKey: true,
            type: Sequelize.INTEGER
        },
        badge_name: {
            type: Sequelize.STRING,
            notEmpty: true
        },
       
        points_required:{
            type: Sequelize.INTEGER,
        },
        
       icon_path: {
           type: Sequelize.STRING
    }
    });
   

    return Badge;
}