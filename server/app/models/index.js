"use strict";
 
var fs = require("fs");
var path = require("path");
var Sequelize = require("sequelize");
var config = {
    host     : process.env.DB_HOST,
    username : process.env.DB_USER,
    password : process.env.DB_PASS,
    database : process.env.DB_NAME,
    dialect: "mysql",
    operatorsAliases: false
}
var sequelize = new Sequelize(config.database, config.username, config.password, config);
var db = {};

 
fs
    .readdirSync(__dirname)
    .filter(function(file) {
        return (file.indexOf(".") !== 0) && (file !== "index.js");
    })
    .forEach(function(file) {
        var model = sequelize.import(path.join(__dirname, file));
        db[model.name] = model;
    });
 
Object.keys(db).forEach(function(modelName) {
    if ("associate" in db[modelName]) {
        db[modelName].associate(db);
    }
});
 
 
db.sequelize = sequelize;
db.Sequelize = Sequelize;
 
module.exports = db;