let express = require('express')
let app = express()

console.log('Hello World')

app.use("/public", express.static(__dirname + '/public'))

app.get('/', (req, res) => {
    // res.send('Hello Express')
    const filePath = __dirname + '/views/index.html'
    res.sendFile(filePath)
})

app.get('/json', (req, res) => {
    res.json({
        message: 'Hello json',
    })
})
































 module.exports = app;
