import fs from 'node:fs';
import path from "node:path";
import os from "node:os";

const secretWarsFilepath = path.resolve(os.homedir(), ".secretwars.json");

export const initRepo = () => {
  // only create when inexistent
  if (!fs.existsSync(secretWarsFilepath)) {
    fs.writeFileSync(secretWarsFilepath, "[]");
  }
}

export const getSecrets = () => {
    fs.readFile(secretWarsFilepath, (err, json) => {
        if(err) {
            console.log(err);
            return; 
        }
        if(json == null || json.length === 0) { 
            console.log("No secrets found");
            return; 
        } 

        const data = JSON.parse(json);
        console.log(data);
    })
}

export const insertSecrets = (toInsert) => {
    fs.readFile(secretWarsFilepath, (err, json) => {
        if(err) {
            console.log(err);
            return; 
        }
        let secrets = [];
        if(json && json.length > 0) {
            secrets = JSON.parse(json);
        }
        
        const newSecret = {
            "subject": toInsert[0],
            "secret": toInsert[1]
        }

        secrets.push(newSecret);
        
        const updatedJson = JSON.stringify(secrets);

        fs.writeFile(secretWarsFilepath, updatedJson, (err) => {
            if(err) {
                console.log(err);
            }
        });
    });
}
