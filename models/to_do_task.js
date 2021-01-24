module.exports = function(sequelize, DataTypes) {
    var ToDoTask = sequelize.define('ToDoTask', {
        Completed: {
            type: DataTypes.BOOLEAN,
            defaultValue: 100,
            allowNull: false
        },
        PointsEarned: {
            type: DataTypes.INTEGER,
            defaultValue: 100,
            allowNull: false
        }
    });

    ToDoTask.associate = function(models) {
        // We're saying that a Post should belong to an Author
        // A Post can't be created without an Author due to the foreign key constraint
        ToDoTask.belongsTo(models.Task, {
          foreignKey: {
            allowNull: false
          }
        });

        ToDoTask.belongsTo(models.User, {
            foreignKey: {
              allowNull: false
            }
          });
    };

    return ToDoTask;
}