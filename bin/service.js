import * as fs from 'fs';
import path from "node:path";
import os from "node:os";
import {log} from './tui.js';

const secretWarsFilepath = path.resolve(os.homedir(), ".secretwars.json");

export const generateTxt = () => {
    // Generate file before writing it
    // allow to specify output file
    const fileToWrite = "your_secrets.txt";

    fs.appendFile(fileToWrite, "", (err) => {
        if(err) {
            const cause = err ? `Causes: \n${err.message}` : "";
            log.error(trimWs("secretwars is unable to write the secrets file\n\n" + cause));
            return;
        }
    });

    fs.readFile(secretWarsFilepath, (err, json) => {
        if(err) {
            const cause = err ? `Causes: \n${err.message}` : "";
            log.error(trimWs("secretwars is unable to read the secrets\n\n" + cause));
            return;
        }

        fs.writeFile(fileToWrite, json, (err) => {
            if(err) {
              const cause = err ? `Causes: \n${err.message}` : "";
              log.error(trimWs("secretwars is unable to write the secrets file\n\n" + cause));
              return;
            }
        })
    })
}
