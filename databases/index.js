const fs = require('fs');
const Sequelize = require('sequelize');
const databases = {};

fs.readdirSync('./databases').forEach(file => {
  if (file !== "index.js") {
    tmp = require(`./${file}`)
    const { dialect, host, port, username, password, database, storage} = tmp;
    databases[tmp.name] = new Sequelize({dialect, host, port, username, password, database,storage})
  }
});

module.exports = { databases, Sequelize };