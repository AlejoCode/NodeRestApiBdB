const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const PersonSchema = new Schema({
    name: {
        type: String,
        required: [true, 'Please filled the name, We need it tho o:']
    },
    father: {
        type: String,
        default: ""
    },
    mother: {
        type: String,
        default: ""
    }
});

const Person = mongoose.model('person', PersonSchema);

module.exports = Person;