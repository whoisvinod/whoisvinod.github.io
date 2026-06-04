try {
    const fs = require('fs');
    const pdf = require('pdf-parse');
    console.log('Modules loaded');
    const dataBuffer = fs.readFileSync('Profile.pdf');
    console.log('File read, size:', dataBuffer.length);
    pdf(dataBuffer).then(function (data) {
        console.log('Text extracted');
        console.log(data.text);
    }).catch(err => {
        console.error('PDF Parse Error:', err);
    });
} catch (e) {
    console.error('Script Error:', e);
}
