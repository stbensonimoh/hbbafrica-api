import { Applicant } from "../models/applicant";
import { Request, Response } from "express";
import NotifyService from "../modules/applicantNotifyService";

import mongoose from "mongoose";

const createApplicant = (req: Request, res: Response) => {
  const applicant = new Applicant(req.body);
  applicant
    .save()
    .then(() => {
      res.status(201).json({
        message: "Applicant created Successfully",
      });
      NotifyService.email_sms_applicant(applicant);
    })
    .catch((err: Error) => {
      res.status(400).json({
        error: `Error creating applicant ${err}`,
      });
    });
};

const listAllApplicants = async (req: Request, res: Response) => {
  const applicant = await Applicant.find()
    .select(
      "firstName lastName email phone dateOfBirth gender residentInAbuja organisationName studentLevel yearOfCallToBar previousHumanRightsEducation areaOfInterest expectationAndMotivation benefitsOfCourse referral createdAt"
    )
    .exec()
    .then((results) => {
      const result: any = results.map((result: any) => {
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
};

export { createApplicant, listAllApplicants };
