import * as fs from 'fs';

export const getSecrets = () => {
    fs.readFile("./data.json", (err, json) => {
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
    fs.readFile("./data.json", (err, json) => {
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

        fs.writeFile("./data.json", updatedJson, (err) => {
            if(err) {
                console.log(err);
            }
        });
    });
}
