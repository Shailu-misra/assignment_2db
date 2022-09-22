const mongoose = require('mongoose')

const Schema = mongoose.Schema;

const experienceSchema = new Schema({
    company_name: {
        type: String,
        maxLength: 30
    },
    job_title: {
        type: Number,
        length: 8,
    },
    job_duration: {
        type: String,
        maxLength: 16,
    },
    
    phoneNumber: {
        type: Number,
        length: 10
    },
    role: {
        type: String,
        maxLength: 30
    },
    project_done: {
        type: String,
        maxLength: 30
    }
 
});


const User = mongoose.model('User', experienceSchema);

module.exports = User