
module.exports = function (sequelize, Sequelize) {

    var toDoTask = sequelize.define('to_do_task', {
        id: {
            autoIncrement: true,
            primaryKey: true,
            type: Sequelize.INTEGER
        },

    
        task_id: {
            type: Sequelize.INTEGER,
            allowNull: false
        },
        user_id: {
            type: Sequelize.INTEGER,
            allowNull: false
        },

        completed: {
            type: Sequelize.BOOLEAN,
            defaultValue: false,
            allowNull: false
        }

    });


    return toDoTask;
}