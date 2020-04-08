
import { Volunteer } from '../models/volunteer'

const createVolunteer = (req: any, res: any) => {
    const volunteers = new Volunteer(req.body);
    volunteers.save()
    .then(()=> {
        res.status(201).json({
            message: 'Volunteer created Successfully'
        })
    })
    .catch((err: any) => {
        res.status(400).json({
            error: 'Error creating volunteer'
        })
    })
}

export {createVolunteer}