const { Comments } = require('../models');
const {faker} = require('@faker-js/faker')

const commentdata = [
  {
    commentsText: `${faker.random.words(faker.mersenne.rand(10, 5))}`,
    user_id: 5,
    posts_id: 1,
  },
  {
    commentsText: `${faker.random.words(faker.mersenne.rand(10, 5))}`,
    user_id: 2,
    posts_id: 4,
  },
  {
    commentsText: `${faker.random.words(faker.mersenne.rand(10, 5))}`,
    user_id: 1,
    posts_id: 2,
  },
  {
    commentsText: `${faker.random.words(faker.mersenne.rand(10, 5))}`,
    user_id: 5,
    posts_id: 3,
  },
  {
    commentsText: `${faker.random.words(faker.mersenne.rand(10, 5))}`,
    user_id: 5,
    posts_id: 3,
  },
  {
    commentsText: `${faker.random.words(faker.mersenne.rand(10, 5))}`,
    user_id: 5,
    posts_id: 4,
  },
  {
    commentsText: `${faker.random.words(faker.mersenne.rand(10, 5))}`,
    user_id: 2,
    posts_id: 1,
  },
  {
    commentsText: `${faker.random.words(faker.mersenne.rand(10, 5))}`,
    user_id: 4,
    posts_id: 2,
  },
  {
    commentsText: `${faker.random.words(faker.mersenne.rand(15, 5))}`,
    user_id: 3,
    posts_id: 4,
  },
  {
    commentsText: `${faker.random.words(faker.mersenne.rand(15, 5))}`,
    user_id: 1,
    posts_id: 1,
  },
  {
    commentsText: `${faker.random.words(faker.mersenne.rand(10, 5))}`,
    user_id: 1,
    posts_id: 1,
  },
  {
    commentsText: `${faker.random.words(faker.mersenne.rand(10, 5))}`,
    user_id: 1,
    posts_id: 4,
  },
];

const seedComments = () => Comments.bulkCreate(commentdata);

module.exports = seedComments;
