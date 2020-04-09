import express from 'express'
import bodyParser from "body-parser";
import fetch from "node-fetch";
import multer from "multer";
import { createVolunteer } from '../functions/volunteer'
const volunteerRoute = express.Router()


// Middlewares
const urlencodedParser = bodyParser.urlencoded({ extended: false })
const jsonParser = bodyParser.json()
// const upload = multer()


// GET Routes
volunteerRoute.get('/', (req, res, next) => {
  res.json({
    route: "Volunteer Route",
    message: "This is the Volunteer Route, welcome!",
  });
});

// POST Routes
volunteerRoute.post('/create', jsonParser, createVolunteer)

export { volunteerRoute }