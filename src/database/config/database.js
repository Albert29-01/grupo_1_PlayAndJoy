require('dotenv').config()

module.exports = {
  "development": {
    "username": "root",
    "password": null,
    "database": "playandjoy",
    "host": "127.0.0.1",
    "dialect": "mysql",
  },
  "test": {
    "username": "root",
    "password": null,
    "database": "database_test",
    "host": "127.0.0.1",
    "dialect": "mysql"
  },
  "production": {
    "username": "229723",
    "password": "8B^Dus3tl4r$",
    "database": "jsongirlify_playandjoy",
    "host":"mysql-jsongirlify.alwaysdata.net",
    "dialect": "mysql"
  }
}
