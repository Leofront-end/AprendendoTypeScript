import { Data } from "./types/data";
import { locallyDeclared } from "./types/globals";

function logData(data: Data) {
    console.log(`Data version is: ${data.version}`);
}

logData(globallyDeclared)

logData(locallyDeclared)