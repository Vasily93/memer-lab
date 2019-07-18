const { Router } = require('express');
const Meme = require('../moduls/Meme');

module.exports = Router()
  .post('/', (req, res, next) => {
    const {
      topField,
      image,
      bottomField
    } = req.body;

    Meme
      .create({ topField, image, bottomField })
      .then(habit => res.send(habit))
      .catch(next);
  })

  .get('/', (req, res, next) => {
    Meme
      .find()
      .then(memes => res.send(memes))
      .catch(next);
  })

  .get('/:id', (req, res, next) => {
    Meme
      .findById()
      .then(meme => res.send(meme))
      .catch(next);
  })




