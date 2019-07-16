require('dotenv').config();

const app = require('./lib/app');
const mongoose = require('mongoose');

mongoose.connect(process.env.MONGODB_URI, {
  useCreateIndex: true,
  useNewUrlParser: true,
  useFindAndModify: false
});

const PORT = process.env.PORT || 7890;

app.listen(PORT, () => {
  console.log(`Started on ${PORT}`);
});
