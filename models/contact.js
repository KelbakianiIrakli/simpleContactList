const mongoose = require('mongoose');

const contactsSchema = mongoose.Schema({
    _id: mongoose.Schema.Types.ObjectId,
    firstName: { type: String, required: true },
    lastName: { type: String, required: true },
    phoneNumber: [String],
    groups: [String],
    remark: {type: String},
    favourite: {type: String},
    contactImage: { type: String},
});

module.exports = mongoose.model('contact', contactsSchema);