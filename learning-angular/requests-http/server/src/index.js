const express = require('express');
//const cors = require('cors');
const bodyParser = require('body-parser')
const multipart = require('connect-multiparty')


const app = express();

app.use(express.json())
app.use(bodyParser.urlencoded({ extended: true }))

// const corsOptions = {
//     origin: '*',
//     optionsSuccessStatus: 200
// }
// app.use(cors(corsOptions))

const multipartMiddleWare = multipart({ uploadDir: './uploads' })
app.post('/upload', multipartMiddleWare, (req, res) => {
    const files = req.files;
    console.log(files)
    res.json({ message: files });
})

app.get('/downloadExcel', (req, res) => {
    res.download('./uploads/testeExcel.xlsx')
})

app.get('/downloadPDF', (req, res) => {
    //res.setHeader('Content-Type', 'application/pdf');
    console.log('chego aq no index.js')

    res.download('./uploads/testePDF.pdf');
});


app.use((err, req, res, next) => res.json({ error: err.message }))

app.listen(8000, () => {
    console.log('servidor iniciado')
})
