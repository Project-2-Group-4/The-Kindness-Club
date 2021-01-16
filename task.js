
module.exports = function(sequelize, Sequelize) {
 
    var Task = sequelize.define('task', {
        id: {
            autoIncrement: true,
            primaryKey: true,
            type: Sequelize.INTEGER
        },
        task_name: {
            type: Sequelize.STRING,
            notEmpty: true
        },
        
        point_value:{
            type: Sequelize.INTEGER,
        }
    });
   

    return Task;
}