const Provider = require('../models/provider.model.js');
const mongoose = require('mongoose');

exports.create = (req, res) => {
    if((!req.body.Name) && (req.body.Name !== " ")){
        return res.status(400).send({
            message: "Provider name can not be empty"
        });
    }

    const provider = new Provider({
        _id: new mongoose.Types.ObjectId(),
        Name: req.body.Name, 
        Address: req.body.Address,
        Telephone: req.body.Telephone
    });

    provider.save()
    .then(data => {
        res.send(data);
    }).catch(err => {
        res.status(500).send({
            message: err.message || "Some error occurred while creating the provider."
        });
    });
};

exports.findAll = (req, res) => {
    Provider.find()
    .then(providers => {
        res.send(providers);
    }).catch(err => {
        res.status(500).send({
            message: err.message || "Some error occurred while retrieving providers."
        });
    });
};

exports.findOne = (req, res) => {
    Provider.findById(req.params.idProvider)
    .then(provider => {
        if(!provider) {
            return res.status(404).send({
                message: "Provider not found with id " + req.params.idProvider
            });            
        }
        res.send(provider);
    }).catch(err => {
        if(err.kind === 'ObjectId') {
            return res.status(404).send({
                message: "Provider not found with id " + req.params.idProvider
            });                
        }
        return res.status(500).send({
            message: "Error retrieving provider with id " + req.params.idProvider
        });
    });
};

exports.update = (req, res) => {
    if(!req.body.Name) {
        return res.status(400).send({
            message: "Provider name can not be empty"
        });
    }

    Provider.findByIdAndUpdate(req.params.idProvider, {
        Name: req.body.Name, 
        Address: req.body.Address,
        Telephone: req.body.Telephone
    }, {new: true})
    .then(provider => {
        if(!provider) {
            return res.status(404).send({
                message: "Provider not found with id " + req.params.idProvider
            });
        }
        res.send(provider);
    }).catch(err => {
        if(err.kind === 'ObjectId') {
            return res.status(404).send({
                message: "Provider not found with id " + req.params.idProvider
            });                
        }
        return res.status(500).send({
            message: "Error updating provider with id " + req.params.idProvider
        });
    });
};

exports.delete = (req, res) => {
    Provider.findByIdAndRemove(req.params.idAllergy)
    .then(provider => {
        if(!provider) {
            return res.status(404).send({
                message: "Provider not found with id " + req.params.idProvider
            });
        }
        res.send({message: "Provider deleted successfully!"});
    }).catch(err => {
        if(err.kind === 'ObjectId' || err.name === 'NotFound') {
            return res.status(404).send({
                message: "Provider not found with id " + req.params.idProvider
            });                
        }
        return res.status(500).send({
            message: "Could not delete provider with id " + req.params.idProvider
        });
    });
};
