const express = require('express');
const app = express();

const bodyParser = require('body-parser');
app.use(bodyParser.json());

const server = require("http").createServer();

const cors = require('cors');
app.use(cors());

server.on("request", app);

// require('./routes/listRoutes')(app);

const port = 8000;

// app.listen(port);

//display linkserver
app.listen(port,()=> console.log(`Server app listening on http://127.0.0.1:${port}`));