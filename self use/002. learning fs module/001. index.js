const fs = require('fs');

const allContents = fs.readdirSync('./');
console.log(allContents);
