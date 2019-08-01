const mongoose = require('mongoose');

const DemographicsSchema = mongoose.Schema({
    FirstName: String,
    LastName: String,
    Gender: String,
    MartialStatus: String,
    ReligiousAffiliation: String,
    Ethnicity: String,
    LanguageSpoken: String,
    Address: String,
    Telephone: String,
    Birthdate: String
}, {
    timestamps: true
});

module.exports = mongoose.model('Demographics', DemographicsSchema);