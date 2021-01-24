module.exports = function(sequelize, DataTypes) {
    var Task = sequelize.define('Task', {
        TaskName: {
            type: DataTypes.STRING,
            notEmpty: true,
        
        },
        PointsEarned: {
            type: DataTypes.INTEGER,
            defaultValue: 100,
            allowNull: false
        }
    });
    return Task;
}



