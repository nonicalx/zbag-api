const User = require('../models/userModel')
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');



async function CreateUser(userData) {
    console.log('userData', userData)
    let user = new User({
        name: userData.name,
        location: userData.location,
        email: userData.email,
        phone: userData.phone,
        password: userData.password,
        seller: userData.seller
    })

    user.password = bcrypt.hashSync(userData.password, 10);
    return user.save();
}


async function loginUser(loginData) {
    let loggingUser = await User.findOne({ email: loginData.email });

    if (!loggingUser) {
        return { message: "user not found" }
    } else {
        let isMatch = await bcrypt.compare(loginData.password, loggingUser.password);

        if (isMatch) {
            const jwtData = { email: loggingUser.email, firstName: loggingUser.firstName, lastName: loggingUser.lastName }
            const secret = "RickyAndMorty"
            const token = jwt.sign(jwtData, secret, { expiresIn: '2d' })
            return { message: "Login Successful", token };
        } else {
            return { message: "wrong password or email" }
        }
    }
}


module.exports = {
    CreateUser,
    loginUser
}