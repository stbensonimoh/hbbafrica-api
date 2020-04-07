const port = <string | number> process.env.PORT || 3000;
const hostname:any = '127.0.0.1';
import { createServer, ServerResponse, IncomingMessage } from "http";
// import { app } from "./routes/app";

const server = createServer((req:IncomingMessage, res: ServerResponse):void => {
    res.statusCode = 200;
    res.setHeader('Content-Type', 'application/json');
    res.end(JSON.stringify({name: "Benson", message: "This is working eh?"}))

});

server.listen(port, hostname, () => {
  console.log(`Server running at http://${hostname}:${port}/`);
});
