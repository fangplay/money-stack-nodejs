const express = require('express');
const bodyParser = require('body-parser');
require('./routes/userRoutes')(app);

const app = express();

app.use(bodyParser.json());

if (process.env.NODE_ENV === 'production') {
  app.use(express.static('front-client/build'));

  const path = require('path');
  app.get('*', (req,res) => {
    res.sendFile(path.resolve(__dirname, 'front-client', 'build', 'index.html'));
  });
}

const PORT = process.env.PORT || 8000;
app.listen(PORT, () => {
  console.log(`app running on port ${PORT}`);
});