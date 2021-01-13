const mongoose = require('mongoose');
const {Schema} = mongoose;

const image = require('./Image')
const {imageSchema} = image


const userSchema = new Schema({
    name: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true
    },
    password: {
        type: String,
        required: true
    },
    images: imageSchema,
    created_at: {
        type: Date,
        default: Date.now()
    }
})
const User = mongoose.model('User', userSchema);
module.exports = User;