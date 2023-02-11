const low = import('lowdb');
const FileSync = import('lowdb/adapters/FileSync');
const shortid = import('shortid');

const adapter = new FileSync('db.json');
const db = low(adapter);

exports = (app) => {

  app.get(`/api/`, async (req, res) => {
    res.json({ message: "Add Record Page"});
    const lists = db.get('list').value();
    return res.status(200).send(lists);
  });

  app.get(`/api/add-record`, async (req, res) => {
    res.json({ message: "Add Record Page"});
    // const lists = db.get('list').value();
    return res.status(200);
  });

  app.post(`/api/record`, async (req, res) => {
    res.json({ message: "Recording" });
    // const {  title , description , category , price , datetime } = req.body;
    const data = {
      id:shortid.generate(),
      title:req.body.title,
      description:req.body.description,
      category:req.body.category,
      price:req.body.price,
      datetime:req.body.datetime
    }
    // const id = shortid.generate();
    // const lists = db
    //   .get('lists')
    //   .push({ id , title , description , category , price , datetime })
    //   .write();

    // const list = db.get('lists')
    //   .find({ id })
    //   .value();

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

//   app.put(`/list`, async (req, res) => {
//     const { name, lastName, id } = req.body;

//     let users = db.get('list')
//         .find({ id })
//         .assign({ name, lastName })
//         .write();

//     const user = db.get('list')
//       .find({ id })
//       .value();

//     return res.status(202).send({
//       error: false,
//       user
//     });
//   });

//   app.delete(`/records?date=:datetime`, async (req, res) => {
//     const { datetime } = req.params;
//     console.log(datetime);

//     db.get('list')
//       .remove({ datetime })
//       .write()

//     return res.status(202).send({
//       error: false
//     })

//   })

}