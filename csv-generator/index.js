const fs = require('fs');
const faker = require('faker');

const size = process.argv[2];

if (!size || !['sm', 'md', 'lg'].includes(size)) {
  throw new Error('No size specified.');
}

const SIZES = {
  sm: 1000,
  md: 100000,
  lg: 1000000,
};

const lineBreak = '\r\n';

let data = `first_name,last_name,phone_number,email,profile_picture${lineBreak}`;

for (let i = 0; i < SIZES[size]; i++) {
  const row = `${faker.name.firstName()},${faker.name.lastName()},${faker.phone.phoneNumberFormat()},${faker.internet.email()},${faker.image.avatar()}`;
  data += row;
  if (i < SIZES[size] - 1) {
    data += lineBreak;
  }
}

fs.writeFile('data.csv', data, function (err) {
  if (err) return console.log(err);
  console.log('data written to csv');
});
