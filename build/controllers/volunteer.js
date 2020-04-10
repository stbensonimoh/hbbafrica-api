"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
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
const findAllVolunteers = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const volunteers = yield volunteer_1.Volunteer.find()
        .select('firstName lastName email phone location gender socialMediaHandles preferredSocialMedia volunteerUnit reasonForVolunteering createdAt')
        .exec()
        .then(results => {
        const result = results.map((result) => {
            return {
                firstName: result.firstName,
                lastName: result.lastName,
                email: result.email,
                phone: result.phone,
                location: result.location,
                gender: result.gender,
                socialMediaHandles: result.socialMediaHandles,
                preferredSocialMedia: result.preferredSocialMedia,
                volunteerUnit: result.volunteerUnit,
                reasonForVolunteering: result.reasonForVolunteering,
                createdAt: result.createdAt,
            };
        });
        const response = {
            count: results.length,
            result: result
        };
        res.status(200).json(response);
    })
        .catch(err => console.log(err));
});
exports.findAllVolunteers = findAllVolunteers;
