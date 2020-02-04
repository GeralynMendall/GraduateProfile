const joi = require('joi');
const monggose = require('mongoose');

const Graduate = mongoose.model('Graduate', new mongoose.Schema({
    name: {
        type: String,
        required: true,
        minlength: 5,
        maxlength: 80,
    },

    email: {
        type: String,
        required: true,
        minlength: 5,
        maxlength: 80,
    },

    dateOfGraduation: {
        type: String,
        required: true,
    },

    bio: {
        type: String,
        required: true,
        minlength: 40,
        maxlength: 500,
    }
}));

function validateAlumni(graduate) {
    const schema = {
        name: Joi.string().min(5).max(80).required,
        email: Joi.string().min(5).max(80).required,
        bio: Joi.string().min(40).max(500).required,
        dateOfGraduation: Joi.string().required
    }
    return Joi.validate(graduate, schema);
}

exports.Graduate = Graduate;
exports.validate = validateAlumni;