"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
require("dotenv").config();
const express_1 = __importDefault(require("express"));
const body_parser_1 = __importDefault(require("body-parser"));
const mongoose_1 = __importDefault(require("mongoose"));
const multer_1 = __importDefault(require("multer"));
const volunteer_1 = require("./volunteer");
const app = express_1.default();
exports.app = app;
//Database connection
// mongoose.Collection('useCreateIndexes', true);
const uri = `mongodb+srv://${process.env.ATLAS_USER}:${process.env.ATLAS_PASSWORD}@hbbafrica-gi7pg.mongodb.net/test?retryWrites=true&w=majority`;
mongoose_1.default.connect(uri, { useNewUrlParser: true, useUnifiedTopology: true })
    .then(() => {
    console.log('Successfully connected');
})
    .catch((err) => {
    console.log(`Couldn't connect ${err}`);
});
// Middlewares
const urlencodedParser = body_parser_1.default.urlencoded({ extended: false });
const jsonParser = body_parser_1.default.json();
const upload = multer_1.default();
app.use((req, res, next) => {
    res.setHeader("Access-Control-Allow-Origin", "*");
    res.setHeader("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content, Accept, Content-Type, Authorization");
    res.setHeader("Access-Control-Allow-Methods", "GET, POST, PUT, DELETE, PATCH, OPTIONS");
    next();
});
app.use('/volunteer', volunteer_1.volunteerRoute);
// GET ROUTES
app.get('/', (req, res) => {
    res.json({ name: "Benson", message: "This is working eh?" });
});
