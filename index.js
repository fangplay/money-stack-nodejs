//import express
const express = import('express');
const bodyParser = import('body-parser');

const app = express();

import('./routes/listRoutes')(app);

app.use(bodyParser.json());

if (process.env.NODE_ENV === 'production') {
  app.use(express.static('front-client/build'));

  const path = import('path');
  app.get('*', (req,res) => {
    res.sendFile(path.resolve(__dirname, 'front-client', 'build', 'index.html'));
  });
}



const PORT = process.env.PORT || 8000;
app.listen(PORT, () => {
  console.log(`app running on port ${PORT}`);
});