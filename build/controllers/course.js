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
const applicant_1 = require("../models/applicant");
const applicantNotifyService_1 = __importDefault(require("../modules/applicantNotifyService"));
const createApplicant = (req, res) => {
    const applicant = new applicant_1.Applicant(req.body);
    applicant
        .save()
        .then(() => {
        res.status(201).json({
            message: "Applicant created Successfully",
        });
        applicantNotifyService_1.default.email_sms_applicant(applicant);
    })
        .catch((err) => {
        res.status(400).json({
            error: `Error creating applicant ${err}`,
        });
    });
};
exports.createApplicant = createApplicant;
const listAllApplicants = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const applicant = yield applicant_1.Applicant.find()
        .select("firstName lastName email phone dateOfBirth gender residentInAbuja organisationName studentLevel yearOfCallToBar previousHumanRightsEducation areaOfInterest expectationAndMotivation benefitsOfCourse referral createdAt")
        .exec()
        .then((results) => {
        const result = results.map((result) => {
            return {
                firstName: result.firstName,
                lastName: result.lastName,
                email: result.email,
                phone: result.phone,
                dateOfBirth: result.dateOfBirth,
                gender: result.gender,
                residentInAbuja: result.residentInAbuja,
                organisationName: result.organisationName,
                studentLevel: result.studentLevel,
                yearOfCallToBar: result.yearOfCallToBar,
                previousHumanRightsEducation: result.previousHumanRightsEducation,
                areaOfInterest: result.areaOfInterest,
                expectationAndMotivation: result.expectationAndMotivation,
                benefitsOfCourse: result.benefitsOfCourse,
                referral: result.referral,
                createdAt: result.createdAt,
            };
        });
        const response = {
            count: results.length,
            result: result,
        };
        res.status(200).json(response);
    })
        .catch((err) => console.log(err));
});
exports.listAllApplicants = listAllApplicants;
