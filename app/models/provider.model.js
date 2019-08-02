const mongoose = require('mongoose');

const ProviderSchema = mongoose.Schema({
    _id: mongoose.Schema.Types.ObjectId,
    Name: String,
    Address: String,
    Telephone: String,
}, {
    timestamps: true
});

module.exports = mongoose.model('Provider', ProviderSchema);