const Demographics = require('../models/demographics.model.js');

// Create and Save a new Note
exports.create = (req, res) => {
    // Validate request
    if(!req.body.FirstName && !req.body.LastName) {
        return res.status(400).send({
            message: "El contenido no puede ser vacio"
        });
    }

    const demographics = new Demographics({
        FirstName: req.body.FirstName,
        LastName: req.body.LastName,
        Gender: req.body.Gender,
        MartialStatus: req.body.MartialStatus,
        ReligiousAffiliation: req.body.ReligiousAffiliation,
        Ethnicity: req.body.Ethnicity,
        LanguageSpoken: req.body.LanguageSpoken,
        Address: req.body.Address,
        Telephone: req.body.Telephone,
        Birthdate: req.body.Birthdate
    });

    demographics.save()
    .then(data => {
        res.send(data);
    }).catch(err => {
        res.status(500).send({
            message: err.message || "Ocurrio un error durante la creacion de la persona"
        });
    });
};

// Retrieve and return all notes from the database.
exports.findAll = (req, res) => {
    Demographics.find()
    .then(demographics => {
        res.send(demographics);
    }).catch(err => {
        res.status(500).send({
            message: err.message || "Ocurrio un error obteniendo todas las personas"
        });
    });
};

exports.findOne = (req, res) => {

};

exports.update = (req, res) => {

};

exports.delete = (req, res) => {

};