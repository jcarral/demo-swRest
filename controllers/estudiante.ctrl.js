'use strict'
const Estudiante = require('../models/estudiante.model')

const checkEstudiante = (req, res, next) => {
    let mail = req.query.correo || req.body.correo || req.params.correo
    console.log(req.body);
    if (mail === '' || mail === undefined || mail === null) {
        res.statusCode = 400
        return res.send({
            error: 'Parámetros incorrectos'
        })
    }
    let query = Estudiante.find({
        correo: mail
    })

    query.exec((err, data) => {
        if (err) {
            res.statusCode = 500
            console.log('Internal error(%d): %s', res.statusCode, err.message)
            res.send({
                error: 'Error del servidor'
            })
        } else if (data === null || data.length === 0) {
            res.statusCode = 200
            res.send({
                message: 'Correo no válido'
            })
        } else {
            res.statusCode = 200
            res.send({
                message: 'Correo válido'
            })
        }
    })

}

const deleteEstudiante = (req, res, next) => {
    let correo = req.body.correo
    Estudiante.findOneAndRemove({
        correo: correo
    }, (err, data) => {
        if (err) {
            res.statusCode = 400
            console.log('Internal error(%d): %s', res.statusCode, err.message)
            res.send({
                error: 'Error al intentar borrar al estudiante'
            })
        } else if (data !== null) {
            res.statusCode = 200
            res.send({
                message: 'Estudiante eliminado correctamente'
            })
        } else {
            res.statusCode = 200
            res.send({
                message: 'Estudiante inexistente'
            })
        }
    })
}

const addEstudiante = (req, res, next) => {
    let estudiante = new Estudiante(req.body.estudiante)
    estudiante.save((err, data) => {
        if (err) {
            res.statusCode = res.statusCode = 500
            console.log('Internal error(%d): %s', res.statusCode, err.message)
            return res.send('Error del servidor')
        }
        res.send({
            message: 'Estudiante almacenado correctamente'
        })
    })
}

module.exports.addEstudiante = addEstudiante
module.exports.deleteEstudiante = deleteEstudiante
module.exports.checkEstudiante = checkEstudiante
