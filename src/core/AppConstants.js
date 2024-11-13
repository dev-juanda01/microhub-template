import { AppEnv } from "./AppEnv.js";

/**
 * Application constants, each of the constants to be used in the
 * whole application is indicated segmented by each module of use.
 */
class AppConstants {
    static logs = {
        RUNNING_SERVER: "Running server",
        listenServer: () => {
            return `${this.logs.RUNNING_SERVER} ${AppEnv.HOST}:${AppEnv.PORT}`;
        }
    }
}

export { AppConstants };