const mongoose = require('mongoose')
const volunteerSchema = mongoose.Schema({
    firstName: {type: String,required: true,trim: true},
    lastName: {type: String,required: true,trim: true},
    email: {type: String,required: true,trim: true},
    phone: {type: String,required: false,trim: true},
    location: { ype: String, required: true, unique: true, lowercase: true, },
    gender: { type: String, required: true, minLength: 7 },
    preferredSocialMedia: {type: String,required: true,trim: true},
    volunteerUnit: {type: String,required: true,trim: true},
    reasonForVolunteering: {type: String,required: true,trim: true}
    
})

const Volunteer = mongoose.model('Volunteer', volunteerSchema)

export { Volunteer }