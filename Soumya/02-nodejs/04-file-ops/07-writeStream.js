
const fs = require('fs');
const path = require('path');

//create a straw for writing little by little

const ws = fs.createWriteStream(path.join(__dirname, 'sunny.txt'));

ws.write('Sunny is mine');
ws.write('\n');
ws.write('Please marry me');

ws.end();