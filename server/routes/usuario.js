const express = require('express');
const app = express();
const Usuario = require('../models/usuario');

app.get('/usuario', function(req, res) {
    res.json('get Usuario');
});
app.post('/usuario', function(req, res) {

    let body = req.body;
    let usuario = new Usuario({
        nombre: body.nombre,
        email: body.email,
        password: body.password,
        role: body.role
    })
    usuario.save((err, usuarioDB) => {

        if (err) {
            res.status(400).json({
                ok: false,
                err
            })
        }

        res.json({
            ok: true,
            usuario: usuarioDB
        })

    })


    if (body.nombre === undefined) {

        res.status(400).json({
            ok: false,
            mensaje: 'El nombre es necesario'
        });

    } else {
        res.json({
            persona: body
        });
    }

    res.json({
        persona
    });

});
app.put('/usuario/:id', function(req, res) {

    let id = req.params.id;

    res.json({ id });
});
app.delete('/usuario', function(req, res) {
    res.json('delete Usuario');
});

module.exports = app;