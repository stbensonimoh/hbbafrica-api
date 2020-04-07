import express from 'express'

const volunteer = express.Router()

volunteer.get('/', (req, res, next)=> {
    res.json({route: 'Volunteer Route', message: 'This is the Volunteer Route, welcome!'})
})

export { volunteer }