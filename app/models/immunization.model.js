const mongoose = require('mongoose');

const ImmunizationSchema = mongoose.Schema({
    _id: mongoose.Schema.Types.ObjectId,
    Date: Date,
    Name: String,
    Type: String,
    DoseQuantity: String,
    Instructions: String,
}, {
    timestamps: true
});

module.exports = mongoose.model('Immunization', ImmunizationSchema);