// Conectar ao banco de dados

const mongoose = require('mongoose')

mongoose.connect('mongodb://localhost/AppLab', {useMongoCLient: true})
mongoose.Promise = global.Promise

module.exports = mongoose