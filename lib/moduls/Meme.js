const mongoose = require('mongoose');

const memeSchema = new mongoose.Schema({
  topField: {
    type:String,
    required:true,
  },
  image: {
    type:String,
    required:true
  },
  bottomField: {
    type:String,
    required:true
  }
});
const Meme = mongoose.model('Habit', memeSchema);

module.exports = Meme;
