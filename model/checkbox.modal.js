const mongoose = require("mongoose");

const checkboxSchema = new mongoose.Schema({
    checkbox: {
        type: Object
    }
}, {
    collection: 'checkboxes'
});

module.exports = mongoose.model('checkboxes', checkboxSchema);

