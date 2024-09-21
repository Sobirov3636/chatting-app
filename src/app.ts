import cors from "cors";
import express from "express";
import http from "http";
import router from "./router";

/**  1-ENTERANCE **/
const app = express();
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(cors({ credentials: true, origin: true }));

/**  2-SESSIONS **/

/**  3-VIEWS **/

/**  4-ROUTERS **/
app.use("/", router);

const server = http.createServer(app);

export default server;
