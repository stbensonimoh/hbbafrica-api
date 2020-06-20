"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose_1 = require("mongoose");
const mongoose_2 = __importDefault(require("mongoose"));
const applicantSchema = new mongoose_1.Schema({
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
}, { timestamps: true });
const Applicant = mongoose_2.default.model("Applicant", applicantSchema);
exports.Applicant = Applicant;
