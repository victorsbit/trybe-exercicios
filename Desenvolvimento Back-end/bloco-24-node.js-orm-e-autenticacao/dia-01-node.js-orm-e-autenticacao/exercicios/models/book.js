const Book = (sequelize, DataTypes) => {
  const Book = sequelize.define('Book', {
    title: DataTypes.STRING,
    author: DataTypes.STRING,
    page_quantity: DataTypes.INTEGER,
  }, {
    underscored: true,
    tableName: 'books'
  });

  return Book;
};

module.exports = Book;
