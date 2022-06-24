const { faker } = require('@faker-js/faker');

const generateOneBook = () => ({
  _id: faker.datatype.uuid(),
  name: faker.commerce.productName(),
  price: faker.commerce.price(),
});

const generateManyBooks = (size) => {
  const limit = size ?? 10;
  const fakesBooks = [];
  for (let index = 0; index < limit; index += 1) {
    fakesBooks.push(generateOneBook());
  }
  return [...fakesBooks];
};
module.exports = { generateOneBook, generateManyBooks };
