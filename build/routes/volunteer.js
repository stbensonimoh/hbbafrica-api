"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const volunteer = express_1.default.Router();
exports.volunteer = volunteer;
volunteer.get('/', (req, res, next) => {
    res.json({ route: 'Volunteer Route', message: 'This is the Volunteer Route, welcome!' });
});
