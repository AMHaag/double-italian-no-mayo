const { Posts } = require('../models');
const { faker } = require('@faker-js/faker');


const postdata = [
  {
    title: `${faker.random.words(faker.mersenne.rand(7, 3))}`,
    content: `${faker.internet.url()}`,
    user_id: 1,
  },
  {
    title: `${faker.random.words(faker.mersenne.rand(7, 3))}`,
    content: `${faker.internet.url()}`,
    user_id: 2,
  },
  {
    title: `${faker.random.words(faker.mersenne.rand(7, 3))}`,
    content: `${faker.internet.url()}`,
    user_id: 1,
  },
  {
    title: `${faker.random.words(faker.mersenne.rand(7, 3))}`,
    content: `${faker.internet.url()}`,
    user_id: 4,
  },
  {
    title: `${faker.random.words(faker.mersenne.rand(7, 3))}`,
    content: `${faker.internet.url()}`,
    user_id: 3,
  },
];

const seedPosts = () => Posts.bulkCreate(postdata);

module.exports = seedPosts;
