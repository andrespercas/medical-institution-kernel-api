const Medication = require('../models/medication.model.js');
const mongoose = require('mongoose');

exports.create = (req, res) => {
    if(!req.body.Name){
        return res.status(400).send({
            message: "Medication name can not be empty"
        });
    }

    const medication = new Medication({
        _id: new mongoose.Types.ObjectId(),
        Type: req.body.Type,
        Name: req.body.Name,
        Instructions: req.body.Instructions,
        DoseQuantity: req.body.DoseQuantity,
        RateQuantity: req.body.RateQuantity
    });

    medication.save()
    .then(data => {
        res.send(data);
    }).catch(err => {
        res.status(500).send({
            message: err.message || "Some error occurred while creating the medication."
        });
    });
};

exports.findAll = (req, res) => {
    Medication.find()
    .then(medications => {
        res.send(medications);
    }).catch(err => {
        res.status(500).send({
            message: err.message || "Some error occurred while retrieving medications."
        });
    });
};

exports.findOne = (req, res) => {
    Medication.findById(req.params.idMedication)
    .then(medication => {
        if(!medication) {
            return res.status(404).send({
                message: "Medication not found with id " + req.params.idMedication
            });            
        }
        res.send(medication);
    }).catch(err => {
        if(err.kind === 'ObjectId') {
            return res.status(404).send({
                message: "Medication not found with id " + req.params.idMedication
            });                
        }
        return res.status(500).send({
            message: "Error retrieving medication with id " + req.params.idMedication
        });
    });
};

exports.update = (req, res) => {
    if(!req.body.Name) {
        return res.status(400).send({
            message: "Medication name can not be empty"
        });
    }

    Medication.findByIdAndUpdate(req.params.idMedication, {
        Type: req.body.Type,
        Name: req.body.Name,
        Instructions: req.body.Instructions,
        DoseQuantity: req.body.DoseQuantity,
        RateQuantity: req.body.RateQuantity
    }, {new: true})
    .then(medication => {
        if(!medication) {
            return res.status(404).send({
                message: "Medication not found with id " + req.params.idMedication
            });
        }
        res.send(medication);
    }).catch(err => {
        if(err.kind === 'ObjectId') {
            return res.status(404).send({
                message: "Medication not found with id " + req.params.idMedication
            });                
        }
        return res.status(500).send({
            message: "Error updating medication with id " + req.params.idMedication
        });
    });
};

exports.delete = (req, res) => {
    Medication.findByIdAndRemove(req.params.idMedication)
    .then(medication => {
        if(!medication) {
            return res.status(404).send({
                message: "Medication not found with id " + req.params.idMedication
            });
        }
        res.send({message: "Medication deleted successfully!"});
    }).catch(err => {
        if(err.kind === 'ObjectId' || err.name === 'NotFound') {
            return res.status(404).send({
                message: "Medication not found with id " + req.params.idMedication
            });                
        }
        return res.status(500).send({
            message: "Could not delete medication with id " + req.params.idMedication
        });
    });
};
