'use strict';

const bookModel = (sequelize, DataTypes) => sequelize.define('book-class9', {
  authors: { type: DataTypes.STRING, required: true },
  title: { type: DataTypes.STRING, required: true },
  image_url:{  type: DataTypes.STRING },
  book_description: {  type: DataTypes.STRING },
  pub_date:{ type: DataTypes.STRING}
});

module.exports = bookModel;

