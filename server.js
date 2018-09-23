const express = require('express')
const app = express()
app.use(express.urlencoded())

app.use(express.static('./'))

app.post('/data', function (req, res) {
    console.log(req.body)
    res.send('Hello World!')
})

app.listen(3000, function () {
    console.log('Listening on 3000')
})
