import * as fs from 'fs';
import path from "node:path";
import os from "node:os";

const secretWarsFilepath = path.resolve(os.homedir(), ".secretwars.json");

export const generateTxt = () => {
    // Generate file before writing it
    const fileToWrite = "your_secrets.txt";

    fs.appendFile(fileToWrite, "", (err) => {
        if(err) {
            console.log(err);
            return;
        }
    });

    fs.readFile(secretWarsFilepath, (err, json) => {
        if(err) {
            console.log(err);
            return;
        }

        fs.writeFile(fileToWrite, json, (err) => {
            if(err) {
                console.log(err);
                return;
            }
        })
    })
}