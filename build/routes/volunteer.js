"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const body_parser_1 = __importDefault(require("body-parser"));
const multer_1 = __importDefault(require("multer"));
const volunteer = express_1.default.Router();
exports.volunteer = volunteer;
// Middlewares
const urlencodedParser = body_parser_1.default.urlencoded({ extended: false });
const jsonParser = body_parser_1.default.json();
const upload = multer_1.default();
// GET Routes
volunteer.get('/', (req, res, next) => {
    res.json({
        route: "Volunteer Route",
        message: "This is the Volunteer Route, welcome!",
    });
});
// POST Routes
volunteer.post('/create', upload.none(), (req, res) => {
    const formdata = req.body;
    console.log(formdata);
    res.json(formdata);
});
