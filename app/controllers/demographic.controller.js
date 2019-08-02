const Demographic = require('../models/demographic.model.js');

// Create and Save a new Note
exports.create = (req, res) => {
    // Validate request
    if(!req.body.Name) {
        return res.status(400).send({
            message: "El nombre de la persona no puede ser vacio"
        });
    }
    
    const demographic = new Demographic({
        Name: req.body.Name,
        Gender: req.body.Gender,
        MartialStatus: req.body.MartialStatus,
        ReligiousAffiliation: req.body.ReligiousAffiliation,
        Ethnicity: req.body.Ethnicity,
        LanguageSpoken: req.body.LanguageSpoken,
        Address: req.body.Address,
        Telephone: req.body.Telephone,
        Birthdate: req.body.Birthdate,
        Guardian: req.body.Guardian,
        Allergies: req.body.Allergies,
        Immunizations: req.body.Immunizations,
        Medications: req.body.Medications,
        PlansCares: req.body.PlanCare,
        Encounters: req.body.Encounters
    });

    demographic.save()
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
    Demographic.find()
    .then(demographic => {
        res.send(demographic);
    }).catch(err => {
        res.status(500).send({
            message: err.message || "Ocurrio un error obteniendo las personas"
        });
    });
};

exports.findOne = (req, res) => {

};

exports.update = (req, res) => {

};

exports.delete = (req, res) => {

};