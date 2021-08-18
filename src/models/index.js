

'use strict';

const { Sequelize, DataTypes } = require('sequelize');
const bookModel = require('./books/model');
const userModel = require('./users');
const Collection = require('./data-collection.js');

const DATABASE_URL = process.env.DATABASE_URL;
// const DATABASE_URL = process.env.DATABASE_URL 

let sequelizeOptions = {
  dialectOptions: {
      ssl: {
        require: true,
        rejectUnauthorized: false,
      }
    }
};


const sequelize = new Sequelize(DATABASE_URL, sequelizeOptions);
const books = bookModel(sequelize, DataTypes);


module.exports = {
  db: sequelize,
  books: new Collection(books),
  users: userModel(sequelize, DataTypes),
};