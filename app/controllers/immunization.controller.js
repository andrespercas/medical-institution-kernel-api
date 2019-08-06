const Immunization = require('../models/immunization.model');
const mongoose = require('mongoose');
const attributes = ["Name", "Type", "DoseQuantity", "Instructions"]

exports.create = (req, res) => {
    if(!req.body.Name){
        return res.status(400).send({
            message: "Immunization name can not be empty"
        });
    }

    const immunization = new Immunization({
        _id: new mongoose.Types.ObjectId(),
        Name: req.body.Name,
        Type: req.body.Type,
        DoseQuantity: req.body.DoseQuantity,
        Instructions: req.body.Instructions,
    });

    immunization.save()
    .then(data => {
        res.send(data);
    }).catch(err => {
        res.status(500).send({
            message: err.message || "Some error occurred while creating the immunization."
        });
    });
};

exports.getAll = (req, res) => {
    Immunization.find()
    .then(immunizations => {
        res.send(immunizations);
    }).catch(err => {
        res.status(500).send({
            message: err.message || "Some error occurred while retrieving immunizations."
        });
    });
};

exports.getOneById = (req, res) => {
    Immunization.findById(req.params.idImmunization)
    .then(immunization => {
        if(!immunization) {
            return res.status(404).send({
                message: "Immunization not found with id " + req.params.idImmunization
            });            
        }
        res.send(immunization);
    }).catch(err => {
        if(err.kind === 'ObjectId') {
            return res.status(404).send({
                message: "Immunization not found with id " + req.params.idImmunization
            });                
        }
        return res.status(500).send({
            message: "Error retrieving immunization with id " + req.params.idImmunization
        });
    });
};

exports.update = (req, res) => {
    if(!req.body.Name) {
        return res.status(400).send({
            message: "Immunization name can not be empty"
        });
    }

    var updatePackage = {}
    var z = attributes.filter(function(k){return req.body[k]}).map(function(e){updatePackage[e]=req.body[e]})

    Immunization.findByIdAndUpdate(req.params.idImmunization, updatePackage, {new: true})
    .then(immunization => {
        if(!immunization) {
            return res.status(404).send({
                message: "Immunization not found with id " + req.params.idImmunization
            });
        }
        res.send(immunization);
    }).catch(err => {
        if(err.kind === 'ObjectId') {
            return res.status(404).send({
                message: "Immunization not found with id " + req.params.idImmunization
            });                
        }
        return res.status(500).send({
            message: "Error updating immunization with id " + req.params.idImmunization
        });
    });
};

exports.delete = (req, res) => {
    Immunization.findByIdAndRemove(req.params.idImmunization)
    .then(immunization => {
        if(!immunization) {
            return res.status(404).send({
                message: "Immunization not found with id " + req.params.idImmunization
            });
        }
        res.send({message: "NotImmunizatione deleted successfully!"});
    }).catch(err => {
        if(err.kind === 'ObjectId' || err.name === 'NotFound') {
            return res.status(404).send({
                message: "Immunization not found with id " + req.params.idImmunization
            });                
        }
        return res.status(500).send({
            message: "Could not delete immunization with id " + req.params.idImmunization
        });
    });
};
