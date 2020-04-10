const port = <string | number> process.env.PORT || 3000;
// const hostname:any = '127.0.0.1';
import { createServer, ServerResponse, IncomingMessage } from "http";
import { app } from "./routes/app";

const server = createServer(app)

server.listen(port, () => {
  console.log(`Server running at ${port}`);
});
