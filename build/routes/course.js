"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const body_parser_1 = __importDefault(require("body-parser"));
const course_1 = require("../controllers/course");
const courseRoute = express_1.default.Router();
exports.courseRoute = courseRoute;
// Middlewares
const jsonParser = body_parser_1.default.json();
// GET Routes
courseRoute.get("/", (req, res, next) => {
    res.json({
        route: "Course Route",
        message: "This is the Course Route, welcome!",
    });
});
courseRoute.get("/listall", jsonParser, course_1.listAllApplicants);
// POST Routes
courseRoute.post("/apply", jsonParser, course_1.createApplicant);
