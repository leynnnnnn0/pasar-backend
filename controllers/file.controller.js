import { PdfReader } from 'pdfreader';

export const extractPdfText = (req, res) => {
    if (!req.files || !req.files.pdfFiles) {
        return res.status(400).send('No files uploaded');
    }

    // Ensure that pdfFiles is an array
    const files = Array.isArray(req.files.pdfFiles) ? req.files.pdfFiles : [req.files.pdfFiles];
    const texts = [];
    let remainingFiles = files.length;

    const processFile = (file, callback) => {
        const fileBuffer = file.data;
        const pdfReader = new PdfReader();
        let text = '';

        pdfReader.parseBuffer(fileBuffer, (err, item) => {
            if (err) {
                console.error('Error:', err);
                callback(err, null);
            } else if (!item) {
                // End of file
                callback(null, text);
            } else if (item.text) {
                text += item.text;
            }
        });
    };

    files.forEach(file => {
        processFile(file, (err, text) => {
            if (err) {
                return res.status(500).send('Error processing PDF');
            }
            texts.push(text);
            remainingFiles--;

            if (remainingFiles === 0) {
                // Send the combined text from all files
                res.send(texts.join('\n\n'));
            }
        });
    });
};
