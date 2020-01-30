const mongoose = require('mongoose');

const CustomerSchema = mongoose.Schema({
    name: {
        type: String,
        require: true
    },
    email: {
        type: String,
        require: true
    },
    created: {
        type: Date,
        require: Date.now
    }
});

module.exports = mongoose.model('Customer', CustomerSchema);