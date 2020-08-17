// Thanks for the help w/ threads: https://medium.com/@Trott/using-worker-threads-in-node-js-80494136dbb6
const {
  Worker,
  isMainThread,
  parentPort,
  workerData,
} = require('worker_threads');
const fs = require('fs');
const faker = require('faker');

const size = process.argv[2];

if (isMainThread && (!size || !['sm', 'md', 'lg'].includes(size))) {
  throw new Error('No size specified.');
}

const SIZES = {
  sm: 1000,
  md: 100000,
  lg: 1000000,
};

const lineBreak = '\r\n';

const header = `first_name,last_name,phone_number,email,profile_picture`;
const dataChunks = [];
const csvLength = SIZES[size];

function main() {
  console.log('writing data to csv....');
  if (isMainThread) {
    if (size !== 'lg') {
      const data = generateData(csvLength);
      return writeData(`${header}${lineBreak}${data}`);
    }

    const threadCount = 2;
    const threads = new Set();
    const csvLengthPartician = csvLength / threadCount;

    for (let i = 1; i <= threadCount; i++) {
      threads.add(
        new Worker(__filename, {
          workerData: { end: csvLengthPartician },
        })
      );
    }

    for (let worker of threads) {
      worker.on('error', (err) => {
        throw err;
      });
      worker.on('exit', () => {
        threads.delete(worker);
        if (threads.size === 0) {
          const fileData = dataChunks.reduce((accum, currentValue) => {
            return `${accum}${lineBreak}${currentValue}`;
          }, header);
          writeData(fileData);
        }
      });
      worker.on('message', (msg) => dataChunks.push(msg));
    }
  } else {
    const rows = generateData(workerData.end);
    parentPort.postMessage(rows);
  }
}

function generateData(end) {
  let rows = '';
  for (let i = 0; i < end; i++) {
    rows += `${faker.name.firstName()},${faker.name.lastName()},${faker.phone.phoneNumberFormat()},${faker.internet.email()},${faker.image.avatar()}`;
    if (i < end - 1) {
      rows += lineBreak;
    }
  }
  return rows;
}

function writeData(data) {
  fs.writeFile('data.csv', data, function (err) {
    if (err) return console.log(err);
    console.log('data written to csv');
  });
}

main();
