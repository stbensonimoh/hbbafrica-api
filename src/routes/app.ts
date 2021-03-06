require("dotenv").config();
import express from "express";
import bodyParser from "body-parser";
import mongoose from "mongoose";
import multer from "multer";
import { volunteerRoute } from "./volunteer";
import { courseRoute } from "./course";

const app = express();

//Database connection
// mongoose.Collection('useCreateIndexes', true);

const uri = `mongodb+srv://${process.env.ATLAS_USER}:${process.env.ATLAS_PASSWORD}@hbbafrica-gi7pg.mongodb.net/test?retryWrites=true&w=majority`;
mongoose
  .connect(uri, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => {
    console.log("Successfully connected");
  })
  .catch((err) => {
    console.log(`Couldn't connect ${err}`);
  });

// Middlewares
const urlencodedParser = bodyParser.urlencoded({ extended: false });
const jsonParser = bodyParser.json();
const upload = multer();

app.use((req, res, next) => {
  res.setHeader("Access-Control-Allow-Origin", "*");
  res.setHeader(
    "Access-Control-Allow-Headers",
    "Origin, X-Requested-With, Content, Accept, Content-Type, Authorization"
  );
  res.setHeader(
    "Access-Control-Allow-Methods",
    "GET, POST, PUT, DELETE, PATCH, OPTIONS"
  );
  next();
});

app.use("/volunteer", volunteerRoute);

app.use("/course", courseRoute);

// GET ROUTES
app.get("/", (req, res) => {
  res.json({ name: "Benson", message: "This is working eh?" });
});

export { app };
