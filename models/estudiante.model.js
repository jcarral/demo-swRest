'use strict'
const mongoose = require('mongoose')

const EstudianteSchema = new mongoose.Schema({
  nombre: String,
  correo: {
    type: String,
    unique: true,
    required: true,
    validate: /^[-a-z0-9~!$%^&*_=+}{\'?]+(\.[-a-z0-9~!$%^&*_=+}{\'?]+)*@([a-z0-9_][-a-z0-9_]*(\.[-a-z0-9_]+)*\.(aero|arpa|biz|com|coop|edu|gov|info|int|mil|museum|name|net|org|pro|travel|mobi|eus|[a-z][a-z])|([0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}))(:[0-9]{1,5})?$/i
  }
})

module.exports = mongoose.model('Estudiante', EstudianteSchema)
