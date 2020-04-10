
import { Volunteer } from '../models/volunteer'
import { Request, Response } from "express"
import NotifyService from '../modules/notifyService'
import mongoose from 'mongoose'


const createVolunteer = (req: Request, res: Response) => {
    const volunteer = new Volunteer(req.body);
    volunteer.save()
    .then(()=> {
        res.status(201).json({
            message: 'Volunteer created Successfully'
        })
        NotifyService.email_sms_volunteer(volunteer)
    })
    .catch((err: Error) => {
        res.status(400).json({
            error: `Error creating volunteer ${err}`
        })
    })
}

const findAllVolunteers = async (req: Request, res: Response) => {
    const volunteers = await Volunteer.find()
    .select('firstName lastName email phone location gender socialMediaHandles preferredSocialMedia volunteerUnit reasonForVolunteering createdAt')
    .exec()
    .then(results => {
        const result:any = results.map((result:any) => {
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
        })
        const response = {
            count: results.length,
            result: result

        }
        res.status(200).json(response)
    })
    .catch(err => console.log(err))
}

export {createVolunteer, findAllVolunteers}