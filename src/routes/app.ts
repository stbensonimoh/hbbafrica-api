import express from 'express'
// import bodyParser from 'body-parser'
// import fetch from 'node-fetch'
// import multer from 'multer'
import { volunteer } from './volunteer'

const app = express()

// Middlewares
// const urlencodedParser = bodyParser.urlencoded({ extended: false })
// const jsonParser = bodyParser.json()
// const upload = multer()

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

app.use('/volunteer', volunteer)

// GET ROUTES
app.get('/', (req, res) => {
    res.json({ name: "Benson", message: "This is working eh?" });
})

export { app }