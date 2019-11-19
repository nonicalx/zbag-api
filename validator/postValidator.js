const Joi = require('joi')



function validateUser(data) {
    const schema = {
        name: Joi.string().required(),
        location: Joi.string().required(),
        email: Joi.string().required(),
        phone: Joi.string().required(),
        password: Joi.string().min(6).required(),
        seller: Joi.boolean()
    }
    return Joi.validate(data, schema);
}

module.exports = { validateUser }