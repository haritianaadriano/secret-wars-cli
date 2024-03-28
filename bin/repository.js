import fs from 'node:fs';
import path from "node:path";
import os from "node:os";
import {log} from "./tui.js";
import {trimWs} from './util.js';

const secretWarsFilepath = path.resolve(os.homedir(), ".secretwars.json");

export const initRepo = () => {
  // only create when inexistent
  if (!fs.existsSync(secretWarsFilepath)) {
    fs.writeFileSync(secretWarsFilepath, "[]");
  }
}

export const getSecrets = () => {
    fs.readFile(secretWarsFilepath, (err, json) => {
        if (err) {
            const cause = err ? `Causes: \n${err.message}` : "";
            log.error(trimWs("secretwars is unable to read the secrets\n\n" + cause));
            return; 
        }

        if(!json?.length) {
            log("No secrets to show");
            return; 
        } 

        const data = JSON.parse(json);
        // TODO: prettier display
        log(data);
    })
}

export const insertSecrets = (secret) => {
    fs.readFile(secretWarsFilepath, (err, json) => {
        if(err) {
            const cause = err ? `Causes: \n${err.message}` : "";
            log.error(trimWs("secretwars is unable to read the secrets\n\n" + cause));
            return;
        }

        /** @type {any[]} */
        let secrets = [];
        try {
          secrets = JSON.parse(json || "[]");
        } catch {
            const cause = err ? `Causes: \n${err.message}` : "";
            log.error(trimWs("secrets couldn't be parsed" + cause));
            return;
        }

        // TODO: toInsert has optional 'subject', validate these option
        const newSecret = {
            "subject": secret[0],
            "secret": secret[1]
        }

        secrets.push(newSecret);

        fs.writeFile(secretWarsFilepath, JSON.stringify(secrets), (err) => {
            if (err) {
              const cause = err ? `Causes: \n${err.message}` : "";
              log.error(trimWs("secretwars is unable to write the secrets file\n\n" + cause));
              return;
            }
        });
    });
}
