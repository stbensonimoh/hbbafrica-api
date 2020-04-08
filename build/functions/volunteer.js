"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const volunteer_1 = require("../models/volunteer");
const createVolunteer = (req, res) => {
    const volunteers = new volunteer_1.Volunteer(req.body);
    volunteers.save()
        .then(() => {
        res.status(201).json({
            message: 'Volunteer created Successfully'
        });
    })
        .catch((err) => {
        res.status(400).json({
            error: `Error creating volunteer ${err}`
        });
    });
};
exports.createVolunteer = createVolunteer;
