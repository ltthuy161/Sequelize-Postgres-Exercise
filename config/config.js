const { Sequelize } = require('sequelize');
const dotevn = require('dotenv');

dotevn.config();

const {
    DB_NAME,
    DB_USER,
    DB_PASSWORD,
    DB_PORT,
    DB_URI
} = process.env;

const db = new Sequelize(DB_URI, {
    define: {
        timestamps: false
    }
});

module.exports = db;