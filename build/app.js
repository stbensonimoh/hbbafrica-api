"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const port = process.env.PORT || 3000;
const hostname = '127.0.0.1';
const http_1 = require("http");
// import { app } from "./routes/app";
const server = http_1.createServer((req, res) => {
    res.statusCode = 200;
    res.setHeader('Content-Type', 'application/json');
    res.end(JSON.stringify({ name: "Benson", message: "This is working eh?" }));
});
server.listen(port, hostname, () => {
    console.log(`Server running at http://${hostname}:${port}/`);
});
