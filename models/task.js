module.exports = function(sequelize, DataTypes) {
    var Task = sequelize.define('Task', {
        TaskName: {
            type: DataTypes.STRING,
            notEmpty: true
        },
        PointValue:{
            type: DataTypes.INTEGER,
        }
    });
   
    return Task;
}