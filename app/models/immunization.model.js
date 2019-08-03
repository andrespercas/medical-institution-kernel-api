const mongoose = require('mongoose');
const moment = require('moment');

const ImmunizationSchema = mongoose.Schema({
    _id: mongoose.Schema.Types.ObjectId,
    Name: String,
    Type: String,
    DoseQuantity: String,
    Instructions: String,
}, {
    timestamps: true
});

module.exports = mongoose.model('Immunization', ImmunizationSchema);