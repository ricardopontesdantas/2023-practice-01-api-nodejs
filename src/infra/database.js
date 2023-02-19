const mongoose = require('mongoose')
mongoose.set('strictQuery', false)
mongoose.connect('mongodb://username:password@host:port/database?options...')
