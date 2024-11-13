import http from "node:http";
import path from "node:path";
import cors from "cors";
import morgan from "morgan";
import express from "express";
import { __dirname } from "#sys";
import { AppEnv } from "./AppEnv.js";
import { AppConstants } from "./AppConstants.js";

/**
 * Http application server for client request management.
 * Handling of modular layers and scalability of the same.
 */
class App {
    constructor() {
        this.app = express();
        this.http_server = http.createServer(this.app);
    }

    /**
     * Request interceptors for fast handling of advanced and
     * deserialized information.
     */
    middlewares() {
        // CORS is a mechanism based on HTTP headers that allows servers to tell browsers which domains, schemes or ports can load resources.
        this.app.use(cors());

        // Morgan is a popular HTTP request logger middleware for Node.js. It simplifies the process of logging HTTP requests in a Node.js application.
        this.app.use(morgan("dev"));

        // Definition of the directory of static files which are public or visible to all web users.
        this.app.use(express.static(path.join(__dirname, "/public")));

        // Data serialization to json for handling http request information
        this.app.use(express.json());

        // The urlencoded function is used to parse the incoming requests with URL-encoded payloads
        this.app.use(
            express.urlencoded({
                extended: false,
            })
        );
    }

    /**
     * Application paths with the necessary services for the
     * interaction of established modules.
     */
    routes() {
        // Entry route to init application process execution in server
        this.app.get("/", (req, res) => {
            res.sendFile(path.join(__dirname, "../public/index.html"));
        });
    }

    /**
     * Running app and listen http port setter, visualize logs to execution process
     */
    listen() {
        // Listen http server and setter other config variables
        this.http_server.listen(AppEnv.PORT, () => {
            console.log(AppConstants.logs.listenServer());
        });
    }

    /**
     * Start app server with all functions specific
     * @param {Array[any]} args arguments to running server to scripting
     */
    start(args = []) {
        this.listen();
        this.middlewares();
        this.routes();
    }
}

export { App };