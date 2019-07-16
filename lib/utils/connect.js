const mongoose = require('mongoose');

module.exports = (url = process.env.MONGODB_URI) => {
  mongoose.connect(url, {
    useCreateIndex:true,
    useNewUrlParser:true,
    useFindAndModify:false
  });

  mongoose.connection.on('connected', () => {
    console.log(`Connected to MongoDB at ${url}`);
  });

  mongoose.connection.on('disconnected', () => {
    console.log('Not Connected to MongoDB');
  });

  mongoose.connection.on('error', () => {
    console.log('Error connectiong to MongoDb');
  });
}; 
