const express = require('express')
const mongoose = require('mongoose')

mongoose.connect('mongodb://localhost/node_auth', {
    useNewUrlParser: true,
    useUnifiedTopology: true
}, () => {
    console.log('connect to the database')
})

app = express()

app.get('/', (req, res) => {
    res.send('Hello')
})

app.listen(8000)