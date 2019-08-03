const Demographic = require('../models/demographic.model.js');
const mongoose = require('mongoose');

exports.create = (req, res) => {

    if(!req.body.Name) {
        return res.status(400).send({
            message: "Demographic content can not be empty"
        });
    }
    
    const demographic = new Demographic({
        _id: new mongoose.Types.ObjectId(),
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
        PlansCares: req.body.PlanCare,
        Encounters: req.body.Encounters
    });

    demographic.save()
    .then(data => {
        res.send(data);
    }).catch(err => {
        res.status(500).send({
            message: err.message || "Some error occurred while creating the demopgrahic."
        });
    });
};

exports.findAll = (req, res) => {
    Demographic.find()
    .then(demographic => {
        res.send(demographic);
    }).catch(err => {
        res.status(500).send({
            message: err.message || "Some error occurred while retrieving demographics"
        });
    });
};


exports.findOne = (req, res) => {
    Demographic.findById(req.params.idDemographic)
    .then(demographic => {
        if(!demographic) {
            return res.status(404).send({
                message: "Demographic not found with id " + req.params.idDemographic
            });            
        }
        res.send(demographic);
    }).catch(err => {
        if(err.kind === 'ObjectId') {
            return res.status(404).send({
                message: "Demographic not found with id " + req.params.idDemographic
            });                
        }
        return res.status(500).send({
            message: "Error retrieving demographic with id " + req.params.idDemographic
        });
    });
};

exports.update = (req, res) => {
    if(!req.body.Name) {
        return res.status(400).send({
            message: "Demographic name can not be empty"
        });
    }

    Demographic.findByIdAndUpdate(req.params.idDemographic, {
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
        PlansCares: req.body.PlanCare,
        Encounters: req.body.Encounters
    }, {new: true})
    .then(demographic => {
        if(!demographic) {
            return res.status(404).send({
                message: "Demographic not found with id " + req.params.idDemographic
            });
        }
        res.send(demographic);
    }).catch(err => {
        if(err.kind === 'ObjectId') {
            return res.status(404).send({
                message: "Demographic not found with id " + req.params.idDemographic
            });                
        }
        return res.status(500).send({
            message: "Error updating demographic with id " + req.params.idDemographic
        });
    });
};

exports.delete = (req, res) => {
    Demographic.findByIdAndRemove(req.params.idDemographic)
    .then(demographic => {
        if(!demographic) {
            return res.status(404).send({
                message: "Demographic not found with id " + req.params.idDemographic
            });
        }
        res.send({message: "Demographic deleted successfully!"});
    }).catch(err => {
        if(err.kind === 'ObjectId' || err.name === 'NotFound') {
            return res.status(404).send({
                message: "Demographic not found with id " + req.params.idDemographic
            });                
        }
        return res.status(500).send({
            message: "Could not delete demographic with id " + req.params.idDemographic
        });
    });
};
