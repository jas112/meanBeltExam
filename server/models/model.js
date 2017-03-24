// MDB Model Document___
// This document discribes the models used in the MEAN Discussion Board Assignment

console.log('getting Discussion Board Models!!');

var mongoose = require('mongoose');
var Schema = mongoose.Schema;

// User Model___
var UserSchema = new mongoose.Schema({
    name: {type:String, required: true},
    questions: [{type: Schema.Types.ObjectId, ref: 'Question'}],
    answers: [{type: Schema.Types.ObjectId, ref: 'Answer'}]
}, {timestamps:true});

mongoose.model('User', UserSchema);

// Question Model___

var QuestionSchema = new mongoose.Schema({
    title: {type: String, required: true},
    description: {type: String, required: true},
    _user: {type: Schema.Types.ObjectId, ref: 'User'},
    answers: [{type: Schema.Types.ObjectId, ref: 'Answer'}]
}, {timestamps: true});

mongoose.model('Question', QuestionSchema);

// Answer Model___

var AnswerSchema = new mongoose.Schema({
    text: {type: String, required: true},
    details: {type:String},
    likes: {type: Number, default: 0},
    _user: {type: Schema.Types.ObjectId, ref: 'User'},
    _question: {type: Schema.Types.ObjectId, ref: 'Question'}
}, {timestamps: true});

mongoose.model('Answer', AnswerSchema);
