const pdfModule = require('pdf-parse');
const fs = require('fs');
const path = require('path');

async function extract() {
    try {
        console.log('Keys:', Object.keys(pdfModule));
        const PDFParse = pdfModule.PDFParse;
        if (!PDFParse) {
            throw new Error('PDFParse class not found in exports');
        }

        const buffer = fs.readFileSync(path.join(__dirname, 'Profile.pdf'));
        const parser = new PDFParse({ data: buffer });
        const result = await parser.getText();
        const text = result.text;
        fs.writeFileSync('profile_extracted.txt', text);
        console.log('Text saved to profile_extracted.txt');
    } catch (e) {
        console.error('Error:', e);
    }
}
extract();
