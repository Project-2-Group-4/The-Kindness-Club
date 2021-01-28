module.exports = {
    "development": {
      "username": "root",
      "password": "password1",
      "database": "sequelize_passport",
      "host": "127.0.0.1",
      "port": 3306,
      "dialect": "mysql"
    },
    "test": {
      "username": "root",
      "password": "password1",
      "database": "sequelize_passport",
      "host": "127.0.0.1",
      "port": 3306,
      "dialect": "mysql"
    },
    "production": {
      "use_env_variable": "JAWSDB_URL",
      "dialect": "mysql"
    }
  }