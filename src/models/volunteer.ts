import { Schema } from "mongoose"

import mongoose from 'mongoose'

const volunteerSchema: Schema = new Schema(
  {
    firstName: { type: String, required: true, trim: true },
    lastName: { type: String, required: true, trim: true },
    email: { type: String, required: true, unique: true, trim: true },
    phone: { type: String, required: true, trim: true },
    location: { type: String, required: true, lowercase: true },
    socialMediaHandles: {
      linkedin: { type: String, trim: true },
      twitter: { type: String, trim: true },
      instagram: { type: String, trim: true },
      facebook: { type: String, trim: true },
      skype: { type: String, trim: true },
    },
    gender: { type: String, required: true },
    preferredSocialMedia: { type: String, required: true, trim: true },
    volunteerUnit: [{ type: String, required: true, trim: true }],
    reasonForVolunteering: { type: String, required: true, trim: true },
  },
  { timestamps: true }
);

const Volunteer = mongoose.model('Volunteer', volunteerSchema)

export { Volunteer }