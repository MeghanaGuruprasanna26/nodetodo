var mongoose = require('mongoose');

var Schema = mongoose.Schema;

var todoSchema = new Schema({
    username: {
        type: String,
        required: true,
        minlength: 4,
        maxlength: 15
    },
    todo: {
        type: String,
        required: true,
        minlength: 4,
        maxlength: 150
    },
    tags: {
        type: [String],
        required: true,
        enum: ['personal', 'official']
    },
    isDone: Boolean,
    hasAttachment: Boolean
});

var Todos = mongoose.model('Todos', todoSchema);

module.exports = Todos;