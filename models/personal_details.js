const mongoose = require('mongoose')

const Schema = mongoose.Schema;

const personal_details = new Schema({
    
    name: {
        type: String,
        maxLength: 60
    },
    fatherName: {
        type: String,
        maxLength: 60
    },
    phoneNumber: {
        type: Number,
        length: 10
        },
    address: {
        type: String,
        maxLength: 100
    },
    
    about: {
        type: String,
        maxLength: 20
    },
    email: {
        type: String,
        maxLength: 100
    }
    
});


const Consumer = mongoose.model('Consumer', personal_details);
module.exports = Consumer