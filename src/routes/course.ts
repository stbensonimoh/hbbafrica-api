import express from "express";
import bodyParser from "body-parser";
import { createApplicant, listAllApplicants } from "../controllers/course";
const courseRoute = express.Router();

// Middlewares
const jsonParser = bodyParser.json();

// GET Routes
courseRoute.get("/", (req, res, next) => {
  res.json({
    route: "Course Route",
    message: "This is the Course Route, welcome!",
  });
});

courseRoute.get("/listall", jsonParser, listAllApplicants);

// POST Routes
courseRoute.post("/apply", jsonParser, createApplicant);

export { courseRoute };
