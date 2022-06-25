let express = require('express')
let app = express()
require('dotenv').config()

console.log('Hello World')

app.use('/', (req, res, next) => {
    const { method, path, ip } = req
    console.log(`${method} ${path} - ${ip}`)
    next()
})
app.use("/public", express.static(__dirname + '/public'))

app.get('/now', (req, res, next) => {
    req.time = new Date().toString()
    next()
}, (req, res) => {
    res.json({
        time: req.time
    })
})

app.get('/:word/echo', (req, res) => {
    res.json({
        echo: req.params.word
    })
})


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
