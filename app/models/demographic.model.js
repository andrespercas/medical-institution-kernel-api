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
        Name: {
            FirstName: String,
            LastName: String,
        },
        Address: String,
        Telephone: String,
    },
    Allergies: [{
        _allergy: {
            type: mongoose.Schema.Types.ObjectId,
            ref: 'Allergy'
        },
        Date: Date
    }],
    Immunizations: [{
        _immunization: {
            type: mongoose.Schema.Types.ObjectId,
            ref: 'Immunization'
        },
        Date: Date
    }],
    Medications: [{
        _medication: {
            type: mongoose.Schema.Types.ObjectId,
            ref: 'Medication'
        },
        Date: Date,
        _namePrescriber: {
            type: mongoose.Schema.Types.ObjectId,
            ref: 'Provider'
        },
        Reminders: [Date]
    }],
    PlansCares: [
        {
            Activity: String,
            Date: Date,
            Instructions: String,
        }
    ],
    Providers: [
        {
            _provider: {
                type: mongoose.Schema.Types.ObjectId,
                ref: 'Provider'
            },
            Principal: Boolean
        }
    ],
    Encounters: [
        {
            Encounter: String,
            _provider: {
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