const mongoose = require('mongoose');

const AuthorSchema = new mongoose.Schema({
    name: {
        type: String,
        required: [true, "Name is required"],
        minlength: [3, "Name must be at least 3 characters long"]
    },
    isBestSeller: {
        type: Boolean,
    }
}, {timestamps: true});

const Author = mongoose.model('Author', AuthorSchema);

module.exports = Author;