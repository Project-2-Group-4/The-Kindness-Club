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
        // PointsBalance: {
        //     type:DataTypes.INTEGER,
        // }
    });

   Task.associate = function(models) {
        Task.belongsTo(models.User, {
            foreignKey: {
              allowNull: false
            }
          });
        };
    return Task;
}



