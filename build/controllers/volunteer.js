"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const volunteer_1 = require("../models/volunteer");
const notifyService_1 = __importDefault(require("../modules/notifyService"));
const createVolunteer = (req, res) => {
    const volunteer = new volunteer_1.Volunteer(req.body);
    volunteer.save()
        .then(() => {
        res.status(201).json({
            message: 'Volunteer created Successfully'
        });
        notifyService_1.default.email_sms_volunteer(volunteer);
    })
        .catch((err) => {
        res.status(400).json({
            error: `Error creating volunteer ${err}`
        });
    });
};
exports.createVolunteer = createVolunteer;
