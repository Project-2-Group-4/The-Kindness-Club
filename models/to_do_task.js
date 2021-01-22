module.exports = function(sequelize, DataTypes) {
    var toDoTask = sequelize.define('ToDoTask', {
        TaskID: {
            type: DataTypes.INTEGER,
            allowNull: false
        },
        UserID: {
            type: DataTypes.INTEGER,
            allowNull: false
        },
        Completed: {
            type: DataTypes.BOOLEAN,
            defaultValue: false,
            allowNull: false
        }

    });


    return toDoTask;
}