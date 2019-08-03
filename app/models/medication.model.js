const mongoose = require('mongoose');

const MedicationSchema = mongoose.Schema({
    _id: mongoose.Schema.Types.ObjectId,
    Type: String,
    Name: String,
    Instructions: String,
    DoseQuantity: String,
    RateQuantity: String
}, {
    timestamps: true
});

module.exports = mongoose.model('Medication', MedicationSchema);