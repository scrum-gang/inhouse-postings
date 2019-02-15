const mongoose = require('mongoose');
const Schema = mongoose.Schema;

let PostingSchema = new Schema({
    recruiter:{
        type: String,
        required: [true, 'Name field is required']
    },
    title:{
        type: String,
        required: [true, 'Title field is required']
    },
    description:{
        type: String,
        required: [true, 'Description field is required']
    },
    location:{
        type: String,
        required: [true, 'Location field is required']
    },
    salary:{
        type: Number,
        required: [true, 'Salary field is required']
    },
    requirements:{
        type: String,
        required: [true, 'Requirement field is required']
    },
    company:{
        type: String,
        required: [true, 'Company field is required']
    }
});

// Export the model
module.exports = mongoose.model('Posting', PostingSchema);