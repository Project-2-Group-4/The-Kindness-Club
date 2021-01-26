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
        // PointsBalence: {
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



