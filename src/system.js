import path from "node:path";
import {fileURLToPath} from "node:url";

const __filename = fileURLToPath(import.meta.url);
const __rootDir = path.dirname(__filename);

const __dirname = __rootDir;

export {__dirname};
