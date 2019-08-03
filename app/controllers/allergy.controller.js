const Allergy = require('../models/allergy.model.js');
const mongoose = require('mongoose');

exports.create = (req, res) => {
    if(!req.body.Name){
        return res.status(400).send({
            message: "Allergy name can not be empty"
        });
    }

    const allergy = new Allergy({
        _id: new mongoose.Types.ObjectId(),
        Name: req.body.Name, 
        Reaction: req.body.Reaction,
        Severity: req.body.Severity
    });

    allergy.save()
    .then(data => {
        res.send(data);
    }).catch(err => {
        res.status(500).send({
            message: err.message || "Some error occurred while creating the allergy."
        });
    });
};

exports.findAll = (req, res) => {
    Allergy.find()
    .then(allergies => {
        res.send(allergies);
    }).catch(err => {
        res.status(500).send({
            message: err.message || "Some error occurred while retrieving allergies."
        });
    });
};

exports.findOne = (req, res) => {
    Allergy.findById(req.params.idAllergy)
    .then(allergy => {
        if(!allergy) {
            return res.status(404).send({
                message: "Allergy not found with id " + req.params.idAllergy
            });            
        }
        res.send(allergy);
    }).catch(err => {
        if(err.kind === 'ObjectId') {
            return res.status(404).send({
                message: "Allergy not found with id " + req.params.idAllergy
            });                
        }
        return res.status(500).send({
            message: "Error retrieving allergy with id " + req.params.idAllergy
        });
    });
};

exports.update = (req, res) => {
    if(!req.body.Name) {
        return res.status(400).send({
            message: "Allergy name can not be empty"
        });
    }

    Allergy.findByIdAndUpdate(req.params.idAllergy, {
        Name: req.body.Name, 
        Reaction: req.body.Reaction,
        Severity: req.body.Severity
    }, {new: true})
    .then(allergy => {
        if(!allergy) {
            return res.status(404).send({
                message: "Allergy not found with id " + req.params.idAllergy
            });
        }
        res.send(allergy);
    }).catch(err => {
        if(err.kind === 'ObjectId') {
            return res.status(404).send({
                message: "Allergy not found with id " + req.params.idAllergy
            });                
        }
        return res.status(500).send({
            message: "Error updating allergy with id " + req.params.idAllergy
        });
    });
};

exports.delete = (req, res) => {
    Allergy.findByIdAndRemove(req.params.idAllergy)
    .then(allergy => {
        if(!allergy) {
            return res.status(404).send({
                message: "Allergy not found with id " + req.params.idAllergy
            });
        }
        res.send({message: "Allergy deleted successfully!"});
    }).catch(err => {
        if(err.kind === 'ObjectId' || err.name === 'NotFound') {
            return res.status(404).send({
                message: "Allergy not found with id " + req.params.idAllergy
            });                
        }
        return res.status(500).send({
            message: "Could not delete allergy with id " + req.params.idAllergy
        });
    });
};
