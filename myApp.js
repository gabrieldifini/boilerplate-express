let express = require('express')
let app = express()
require('dotenv').config()

console.log('Hello World')

app.use("/public", express.static(__dirname + '/public'))

app.get('/', (req, res) => {
    // res.send('Hello Express')
    const filePath = __dirname + '/views/index.html'
    res.sendFile(filePath)
})

app.get('/json', (req, res) => {
    const response = 'Hello json'
    res.json({
        message: process.env.MESSAGE_STYLE === 'uppercase' ? response.toUpperCase() : response,
    })
})
































 module.exports = app;
