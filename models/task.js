


module.exports = function (sequelize, DataTypes) {
 
    var Tasks = sequelize.define('Tasks', {
        id: {
            type: DataTypes.INTEGER,
           autoIncrement: true,
            primaryKey: true,
         
        },
        task_name: {
            type: DataTypes.STRING,
            notEmpty: true
        },
        
        point_value:{
            type: DataTypes.INTEGER,
        }
    });
Tasks.associate = function(models) {

     Tasks.hasOne(models.User, {
        foreignKey: {
        allowNull: false
      }
    });
    };

    return Tasks;
//     Tasks.sync().then(() => {
//   console.log('table created');
// });
}