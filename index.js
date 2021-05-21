const express = require('express')
const mongoose = require('mongoose')
const cors = require('cors');

mongoose.connect('mongodb://localhost/node_auth', {
    useNewUrlParser: true,
    useUnifiedTopology: true
}, () => {
    console.log('connect to the database')
})

const routes = require('./routes/routes')

app = express()
app.use(cors())
app.use(express.json())

app.use('/api', routes)

app.listen(8000)