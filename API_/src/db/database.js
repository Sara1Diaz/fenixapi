const { Sequelize } = require('sequelize');

const db = new Sequelize('beutyihjcjxhnfu5xwkg', 'uahd6hcuq5pagqct', '8aHDVPdkBUigbeVZpvho', {
  host: 'beutyihjcjxhnfu5xwkg-mysql.services.clever-cloud.com',
  dialect: 'mysql',
  dialectOptions: {
    ssl: {
      rejectUnauthorized: false // Utiliza esta opción si Clever Cloud requiere SSL
    }
  }
});

module.exports = db;
