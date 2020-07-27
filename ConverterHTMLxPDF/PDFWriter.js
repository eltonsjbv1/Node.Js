var pdf = require("html-pdf");

class PDFWrite{
static WriterPDF(filename, html){
    pdf.create(html, {}).toFile(filename, (error) => {});
}


}

module.exports = PDFWrite;