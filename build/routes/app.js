"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
// import bodyParser from 'body-parser'
// import fetch from 'node-fetch'
// import multer from 'multer'
const volunteer_1 = require("./volunteer");
const app = express_1.default();
exports.app = app;
// Middlewares
// const urlencodedParser = bodyParser.urlencoded({ extended: false })
// const jsonParser = bodyParser.json()
// const upload = multer()
app.use((req, res, next) => {
    res.setHeader("Access-Control-Allow-Origin", "*");
    res.setHeader("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content, Accept, Content-Type, Authorization");
    res.setHeader("Access-Control-Allow-Methods", "GET, POST, PUT, DELETE, PATCH, OPTIONS");
    next();
});
app.use('/volunteer', volunteer_1.volunteer);
// GET ROUTES
app.get('/', (req, res) => {
    res.json({ name: "Benson", message: "This is working eh?" });
});
