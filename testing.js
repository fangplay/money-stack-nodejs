require("fix-esm").register();

// const low = import('lowdb');
// const FileSync = import('./lowdb/adapters/FileSync');


// // const adapter = new FileSync('db.json');
// const adapter = new FileSync('./db.json');
// const db = low(adapter);
 
// // set defaults for the db
// db.defaults({
//     earnings: []
// }).write();

// app.post("/test", function(req, res) {
//     // something to add to the db
//     let today = {
//         date: '2017-12-27',
//         cash: 87.50,
//         unit: 'USD'
//     };
    
//     // push and write to the db
//     // db.get('earnings').push(today).write();

//     let addSources;
//         addSources = db.get('earnings').push(today).write()

//         if(addSources) {
//             res.status(200).json({message: "Source added successfully"});
//         } else {
//             res.status(403).json({message: "Cannot add source"});
//         }
// });

// Low DB Configurations
// import { low } from 'lowdb'
// import { JSONFile } from 'lowdb/node'
const router = express.Router();
const low = require('lowdb');
const jsonFileDb = require('json-file-db');
const adapter = new jsonFileDb.FileSync('db.json');
const db = low(adapter);
// const adapter = new FileSync('db.json');
// const db = low(adapter);




router.post("/beta", function(req, res) {
    let today = {
                date: '2017-12-27',
                cash: 87.50,
                unit: 'USD'
            };
    let savedBeta = db.get('savedBeta')
        .push(today)
        .write()

    if(savedBeta) {
        res.status(200).json({message: "Saved successfully"});
    } else {
        res.status(403).json({message: "Cannot save data"});
    }
});



// const express = request("express");
// const low = request("lowdb");

// const app = express();

// app.get("/", async (req, res) => {
//     res.json({ message: "Accountant App Page"});
//     // const lists = db.get('list').value();
//     return res.status(200);
// });
 
const port = 8000;

//display linkserver
fs.listen(port,()=> console.log(`Server testing on http://127.0.0.1:${port}`));