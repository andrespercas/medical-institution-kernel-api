const Demographic = require('../models/demographic.model');
const mongoose = require('mongoose');
const attributes = ["Name", "Gender", "MartialStatus", "ReligiousAffiliation", "Ethnicity", "LanguageSpoken", "Address", "Telephone", "Birthdate",
                    "Guardian", "Allergies", "Immunizations", "Medications", "Providers", "PlansCares", "Encounters"]
const keysAttr = {
    Allergies: "Allergies._allergy",
    Immunizations: "Immunizations._immunization",
    Medications: "Medications._medication",
    Providers: "Providers._provider",
    Encounters: "Encounters._provider"
}

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
        Medications: req.body.Medications,
        Providers: req.body.Providers,
        PlansCares: req.body.PlansCares,
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

exports.getAll = (req, res) => {
    Demographic.find()
    .then(demographic => {
        res.send(demographic);
    }).catch(err => {
        res.status(500).send({
            message: err.message || "Some error occurred while retrieving demographics"
        });
    });
};


exports.getOneById = (req, res) => {
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

exports.getOneByName = (req, res) => {
    Demographic.find({Name: {FirstName: req.params.name, LastName: req.params.lastname}})
    .then(demographic => {
        if(!demographic) {
            return res.status(404).send({
                message: "Demographic not found with name " + req.params.name + " " + req.params.lastname 
            });            
        }
        res.send(demographic);
    }).catch(err => {
        if(err.kind === 'ObjectId') {
            return res.status(404).send({
                message: "Demographic not found with name " + req.params.name + " " + req.params.lastname 
            });                
        }
        return res.status(500).send({
            message: "Error retrieving demographic with name " + req.params.name + " " + req.params.lastname 
        });
    });
};

exports.getAttribute = (req, res) => {
    Demographic.find({_id: req.params.idDemographic}, req.params.key)
    .populate(keysAttr[req.params.key])
    .exec(function (err, attr) {
        if(!attr) {
            return res.status(404).send({
                message: "Attribute not found or empty with name " + req.params.key
            });            
        } else if(attr.length == 0) {
            return res.status(404).send({
                message: "Demographic not found with id " + req.params.idDemographic
            });       
        }
        res.send(attr[0]);

        if(err) {
            if(err.kind === 'ObjectId') {
                return res.status(404).send({
                    message: "Attribute not found with name " + req.params.key
                });                
            }
            return res.status(500).send({
                message: "Error retrieving demographic wwith name " + req.params.key
            });
        }
    });
    /*.then(attr => {
        if(!attr) {
            return res.status(404).send({
                message: "Attribute not found or empty with name " + req.params.key
            });            
        } else if(attr.length == 0) {
            return res.status(404).send({
                message: "Demographic not found with id " + req.params.idDemographic
            });       
        }
        res.send(attr[0]);
    }).catch(err => {
        if(err.kind === 'ObjectId') {
            return res.status(404).send({
                message: "Attribute not found with name " + req.params.key
            });                
        }
        return res.status(500).send({
            message: "Error retrieving demographic wwith name " + req.params.key
        });
    }); */
};

exports.update = (req, res) => {
    if(!req.body.Name) {
        return res.status(400).send({
            message: "Demographic name can not be empty"
        });
    }

    var updatePackage = {}
    var z = attributes.filter(function(k){return req.body[k]}).map(function(e){updatePackage[e]=req.body[e]})

    Demographic.findByIdAndUpdate(req.params.idDemographic, updatePackage, {new: true})
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
