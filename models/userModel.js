const mongoose = require('mongoose');

//Mongoose User Schema
const userSchema = new mongoose.Schema({
    name: { type: String, required: true },
    location: { type: String, required: true },
    email: { type: String, required: true },
    phone: { type: String, required: true },
    password: { type: String, required: true, minlength: 6 },
    seller: { type: Boolean, required: false, default: false }
})

//model for user
const User = mongoose.model("User", userSchema);




module.exports = User;