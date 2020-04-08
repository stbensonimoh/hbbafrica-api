import express from "express";
import bodyParser from "body-parser";
import fetch from "node-fetch";
import multer from "multer";

const volunteer = express.Router();

// Middlewares
const urlencodedParser = bodyParser.urlencoded({ extended: false })
const jsonParser = bodyParser.json()
const upload = multer()


// GET Routes
volunteer.get('/', (req, res, next) => {
  res.json({
    route: "Volunteer Route",
    message: "This is the Volunteer Route, welcome!",
  });
});

// POST Routes
volunteer.post('/create', upload.none(), (req, res)=> {
    const formdata = req.body
    console.log(formdata)
    res.json(formdata)
})

export { volunteer };
