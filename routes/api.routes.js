'use strict'
const express = require('express')
const router = express.Router()
const Estudiante = require('../controllers/estudiante.ctrl')

router.delete('/delete', Estudiante.deleteEstudiante)
router.all('/check', Estudiante.checkEstudiante)
router.get('/check/:correo', Estudiante.checkEstudiante)
router.put('/add', Estudiante.addEstudiante)

module.exports = router
