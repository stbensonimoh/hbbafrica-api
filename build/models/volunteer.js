"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose_1 = require("mongoose");
const mongoose_2 = __importDefault(require("mongoose"));
const volunteerSchema = new mongoose_1.Schema({
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
});
const Volunteer = mongoose_2.default.model('Volunteer', volunteerSchema);
exports.Volunteer = Volunteer;
