
import { Volunteer } from '../models/volunteer'
import { Request, Response } from "express"

const createVolunteer = (req: Request, res: Response) => {
    const volunteers = new Volunteer(req.body);
    volunteers.save()
    .then(()=> {
        res.status(201).json({
            message: 'Volunteer created Successfully'
        })
    })
    .catch((err: any) => {
        res.status(400).json({
            error: `Error creating volunteer ${err}`
        })
    })
}

export {createVolunteer}