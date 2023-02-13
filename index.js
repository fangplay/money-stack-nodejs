require("fix-esm").register();
//express => requirement
const express = require('express');
const app = express();
//body-parser => requirement
const bodyParser = require('body-parser');
app.use(bodyParser.json());
//cors => requirement
const cors = require('cors');
app.use(cors());
//lowdb&nanoid => requirement
const low = require('lowdb');
const FileSync = require('lowdb/adapters/FileSync');
const nanoid = require('nanoid');
//edit in file on db.json
const adapter = new FileSync('db.json');
const db = low(adapter);

  app.get(`/api`, async (req, res) => {
    res.json({ message: "Accountant App Page"});
    const lists = db.get('list').value();
    return res.status(200).send(lists);
  });

  app.get(`/api/add-record`, async (req, res) => {
    res.json({ message: "Add Record Page"});
    return res.status(200);
  });

  app.post(`/api/record`, async (req, res) => {
    res.json({ message: "Recording" });
    const data = {
      id:nanoid.generate(),
      title:req.body.title,
      description:req.body.description,
      category:req.body.category,
      price:req.body.price,
      datetime:req.body.datetime
    }
    db.get('lists')
      .push(data)
      .last()
      .write()

    return res.status(200).send({
      error: false,
      list
    });
  });

  app.get(`/api/records?date=:datetime`, async (req, res) => {
    res.json({ message: "Record Time Select Page"});
    const lists = db.get('list').value();
    return res.status(200).send(lists);
  });

const port = 8000;

// app.listen(port);

//display linkserver
app.listen(port,()=> console.log(`Server app listening on http://127.0.0.1:${port}`));