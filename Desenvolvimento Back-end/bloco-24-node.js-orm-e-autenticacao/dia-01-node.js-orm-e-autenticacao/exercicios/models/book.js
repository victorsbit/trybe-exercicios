const Book = (sequelize, DataTypes) => {
  const Book = sequelize.define('books', {
    title: DataTypes.STRING,
    author: DataTypes.STRING,
    page_quantity: DataTypes.INTEGER,
  });

  return Book;
};

module.exports = Book;
