const mongoose = require('mongoose')

const Schema = mongoose.Schema;

const recommend_schema = new Schema({
    name: {
        type: String,
        required: true,
        maxLength: 30
    },
    phoneNumber: {
        type: Number,
        length: 10,
        required: true,
        unique: true
    },
    company: {
        type: String,
        required: true,
        maxLength: 30
    },
    title: {
        type: String,
        required: true,
        maxLength: 30
    },
    date: {
            type: Date
        },
    text: {
        type: String,
        required: true,
        maxLength: 30
    }
   
});


const UserTP = mongoose.model('UserTP', recommend_schema);

module.exports = UserTP