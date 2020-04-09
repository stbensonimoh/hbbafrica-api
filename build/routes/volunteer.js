"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const body_parser_1 = __importDefault(require("body-parser"));
const volunteer_1 = require("../functions/volunteer");
const volunteerRoute = express_1.default.Router();
exports.volunteerRoute = volunteerRoute;
// Middlewares
const urlencodedParser = body_parser_1.default.urlencoded({ extended: false });
const jsonParser = body_parser_1.default.json();
// const upload = multer()
// GET Routes
volunteerRoute.get('/', (req, res, next) => {
    res.json({
        route: "Volunteer Route",
        message: "This is the Volunteer Route, welcome!",
    });
});
// POST Routes
volunteerRoute.post('/create', jsonParser, volunteer_1.createVolunteer);
