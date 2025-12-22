import dotenv from "dotenv";
import http from "http";
import app from "./app";
import { initSocketServer } from "./websocket/socket";

dotenv.config();

const port = process.env.PORT || 3000;
const server = http.createServer(app);

initSocketServer(server);

server.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
