var Sequelize = require('sequelize');

var config = {
    database: 'books', // 使用哪个数据库
    username: 'root', // 用户名
    password: 'QAZ951753..pl,', // 口令
    host: 'localhost', // 主机名
    port: 8889 // 端口号，MySQL默认3306
};

module.exports = new Sequelize(config.database, config.username, config.password, {
    host: config.host,
    port:config.port,
    dialect: 'mysql',
    pool: {
        max: 5,
        min: 0,
        idle: 30000
    }
});