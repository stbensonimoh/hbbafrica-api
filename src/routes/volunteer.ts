import express from 'express'
import bodyParser from "body-parser";
import { createVolunteer, findAllVolunteers } from '../controllers/volunteer'
const volunteerRoute = express.Router()


// Middlewares
const jsonParser = bodyParser.json()


// GET Routes
volunteerRoute.get('/', (req, res, next) => {
  res.json({
    route: "Volunteer Route",
    message: "This is the Volunteer Route, welcome!",
  });
});

volunteerRoute.get('/findall', jsonParser, findAllVolunteers)

// POST Routes
volunteerRoute.post('/create', jsonParser, createVolunteer)

export { volunteerRoute }