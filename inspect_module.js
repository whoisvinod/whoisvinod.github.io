const pdf = require('pdf-parse');
console.log('Type of pdf:', typeof pdf);
console.log('Keys of pdf:', Object.keys(pdf));
if (typeof pdf !== 'function') {
    console.log('pdf is not a function. It might be:', pdf);
    if (pdf.default) {
        console.log('Type of pdf.default:', typeof pdf.default);
    }
} else {
    console.log('pdf is a function');
}
