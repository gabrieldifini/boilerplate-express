let express = require('express')
let app = express()

console.log('Hello World')

app.get('/', (req, res) => {
    // res.send('Hello Express')
    const filePath = __dirname + '/views/index.html'
    res.sendFile(filePath)
})
































 module.exports = app;
