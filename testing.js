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
// const low = require('lowdb');
// const FileSync = require('lowdb/adapters/FileSync');

// const adapter = new FileSync('db.json');
// const db = low(adapter);


// app.post("/beta", function(req, res) {
//     let today = {
//                 date: '2017-12-27',
//                 cash: 87.50,
//                 unit: 'USD'
//             };
//     let savedArticles = db.get('savedArticles')
//         .push(today)
//         .write()

//     if(savedArticles) {
//         res.status(200).json({message: "Saved successfully"});
//     } else {
//         res.status(403).json({message: "Cannot save data"});
//     }
// });

const express = import("express");
const low = import("lowdb");

const app = express();

app.get("/", async (req, res) => {
    res.json({ message: "Accountant App Page"});
    // const lists = db.get('list').value();
    return res.status(200);
});
 
const port = 8000;

//display linkserver
app.listen(port,()=> console.log(`Server testing on http://127.0.0.1:${port}`));