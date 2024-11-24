const { Sequelize } = require('sequelize');

const sequelize = new Sequelize(process.env.DATABASE_URL, {
  dialect: 'postgres',
  protocol: 'postgres',
  logging: false, // Disable logging for production
  dialectOptions: {
    ssl: {
      require: true,
      rejectUnauthorized: false, // Adjust for certain platforms
    },
  },
});

module.exports = sequelize;
