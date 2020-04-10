
import { Volunteer } from '../models/volunteer'
import { Request, Response } from "express"
import NotifyService from '../modules/notifyService'


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

export {createVolunteer}