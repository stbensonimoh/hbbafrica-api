import { Schema } from "mongoose";

import mongoose from "mongoose";

const applicantSchema: Schema = new Schema(
  {
    firstName: { type: String, required: true, trim: true },
    lastName: { type: String, required: true, trim: true },
    email: { type: String, required: true, unique: true, trim: true },
    phone: { type: String, required: true, trim: true },
    dateOfBirth: { type: String, required: true, lowercase: true },
    gender: { type: String, required: true },
    residentInAbuja: { type: String, required: true },
    organisationName: { type: String, required: true, trim: true },
    studentLevel: { type: String, required: false },
    yearOfCallToBar: { type: String, required: false },
    previousHumanRightsEducation: { type: String, required: false, trim: true },
    areaOfInterest: { type: String, required: true, trim: true },
    expectationAndMotivation: { type: String, required: true, trim: true },
    benefitsOfCourse: { type: String, required: true, trim: true },
    referral: { type: String, required: true, trim: true },
  },
  { timestamps: true }
);

const Applicant = mongoose.model("Applicant", applicantSchema);

export { Applicant };
