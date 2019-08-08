const mongoose = require('mongoose');

const AllergySchema = mongoose.Schema({
    _id: mongoose.Schema.Types.ObjectId,
    Name: String,
    Reaction: String,
    Severity: String,
}, {
    timestamps: true
});

module.exports = mongoose.model('Allergy', AllergySchema);