const mongoose = require('mongoose');

const DemographicSchema = mongoose.Schema({
    _id: mongoose.Schema.Types.ObjectId,
    Name: {
        FirstName: String,
        LastName: String
    },
    Gender: String,
    MartialStatus: String,
    ReligiousAffiliation: String,
    Ethnicity: String,
    LanguageSpoken: String,
    Address: String,
    Telephone: String,
    Birthdate: Date,
    Guardian: {
        Role: String,
        FirstName: String,
        LastName: String,
        Address: String,
        Telephone: String,
    },
    Allergies: [{
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Allergy'
    }],
    Immunizations: [{
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Immunization'
    }],
    Medications: [{
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Medication'
    }],
    PlansCares: [
        {
            Activity: String,
            Date: Date,
            Instructions: String,
        }
    ],
    Encounters: [
        {
            Encounter: String,
            Provider: {
                type: mongoose.Schema.Types.ObjectId,
                ref: 'Provider'
            },
            Location: String,
            Date: Date
        }
    ]
}, {
    timestamps: true
});

module.exports = mongoose.model('Demographic', DemographicSchema);