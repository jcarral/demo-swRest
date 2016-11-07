'use strict'
const app = require('express')()
const bodyParser = require('body-parser')
const config = require('config')
const morgan = require('morgan')
const mongoose = require('mongoose')

const conf = (process.env.NODE_ENV === 'development') ? require('./config.dev.js') : require('./config.prod.js')

//don't show the log when it is test
if (config.util.getEnv('NODE_ENV') !== 'test') {
    //use morgan to log at command line
    app.use(morgan('combined')); //'combined' outputs the Apache style LOGs
}

mongoose.connect(conf.path)
mongoose.connection.once('connected', function() {
    console.log("Connected to database")
})

//Middleware's
app.use(bodyParser.urlencoded({
    extended: false
}))
app.use(bodyParser.json())

//CORS
app.use(function(req, res, next) {
    res.header("Access-Control-Allow-Origin", "*")
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept")
    res.header("Access-Control-Allow-Methods", "POST, GET, PUT, DELETE, OPTIONS")
    next();
})

app.use('/api', require('./routes/api.routes'))
app.use((req, res, next) => {
    res.statusCode = 404
    res.send({
        error: 'Page not found'
    })
})
console.log(conf.path);
app.listen(conf.port, () => {
    console.log("App en marcha")
})
