const { User } = require('../models');
const { faker } = require('@faker-js/faker');

let fakeUserName = []
for(let i=0;i<5;i++){
  let fakeUser = `${faker.internet.userName()}`;
  fakeUserName.push(fakeUser)
}


const userdata = [
  {
    username: `${fakeUserName[0]}`,
    password: 'password',
  },
  {
    username: `${fakeUserName[1]}`,
    password: 'password',
  },
  {
    username: `${fakeUserName[2]}`,
    password: 'password',
  },
  {
    username: `${fakeUserName[3]}`,
    password: 'password',
  },
  {
    username: `${fakeUserName[4]}`,
    password: 'password',
  },
];

const seedUsers = () => User.bulkCreate(userdata, {individualHooks: true});

console.log(userdata)
module.exports = seedUsers;
