const fs = require('fs');
const faker = require('faker');

const lineBreak = '\r\n';

let data = `first_name,last_name,phone_number,email,profile_picture${lineBreak}`;

for (let i = 0; i < 10000; i++) {
  const row = `${faker.name.firstName()},${faker.name.lastName()},${faker.phone.phoneNumberFormat()},${faker.internet.email()},${faker.image.avatar()}${lineBreak}`;
  data += row;
}

fs.writeFile('data.csv', data, function (err) {
  if (err) return console.log(err);
  console.log('data written to csv');
});
