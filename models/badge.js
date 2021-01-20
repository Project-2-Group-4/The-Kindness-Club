
module.exports = function(sequelize, Sequelize) {
 
    var Badge = sequelize.define('Badge', {
   
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
   

  Badge.associate = function(models) {

      Badge.hasOne(models.User, {
        foreignKey: {
        allowNull: false
      }
    });
    };
return Badge;
      }
       
  

  



