const mongoose = require('mongoose');
const Schema = mongoose.Schema;

//create posting schema and model
const PostingSchema = new Schema({
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
        type: int,
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

const Posting = mongoose.model('posting', PostingSchema);

module.exports = Posting;