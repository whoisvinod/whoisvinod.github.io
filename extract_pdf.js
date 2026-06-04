const fs = require('fs');
const pdf = require('pdf-parse');
const path = require('path');

const filePath = path.join(__dirname, 'Profile.pdf');
console.log('Reading file from:', filePath);

if (!fs.existsSync(filePath)) {
    console.error('File not found:', filePath);
    // Try listing the directory to see what's there
    console.log('Directory contents:', fs.readdirSync(__dirname));
    process.exit(1);
}

let dataBuffer = fs.readFileSync(filePath);

pdf(dataBuffer).then(function (data) {
    console.log(data.text);
}).catch(function (error) {
    console.error(error);
});
