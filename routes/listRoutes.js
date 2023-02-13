// import { JSONFile, JSONFileSync } from 'lowdb/node';
// const jsonFile = require('lowdb/node/jsonfile');
const low = require('lowdb');
const FileSync = require('lowdb/adapters/FileSync');
const nanoid = require('nanoid');

const adapter = new FileSync('db.json');
// const adapter = new jsonFile('db.json');
const db = low(adapter);

exports = (app) => {

  app.get(`/`, async (req, res) => {
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
    res.json({ message: "Add Record Page"});
    
    return res.status(200).send(lists);
  });

}