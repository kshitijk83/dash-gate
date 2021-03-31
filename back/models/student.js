const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const studentSchema = new Schema({
    name: {
        type: String,
        required: true
    },
    gender: {
        type: String,
        enum: ['M', 'F'],
        required: true
    },
    rollno: {
        type: String,
        required: true
    },
    year: {
        type: String,
        required: true
    },
    hostel: {
        type: String,
        required: true
    },
    out_of_campus: {
        type: Boolean,
        required: true
    }
})

module.exports = mongoose.model('Student', studentSchema);