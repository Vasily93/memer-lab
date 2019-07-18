require('dotenv').config();

const app = require('../lib/app');
const request = require('supertest');
const connect = require('../lib/utils/connect');
const mongoose = require('mongoose');
// const Meme = require('../lib/moduls/Meme');

describe('testing all meme routes', () => {
  beforeAll(() => {
    connect();
  });

  beforeEach(() => {
    return mongoose.connection.close();
  });

  afterAll(() => {
    return mongoose.connection.close();
  });
  
  it('creates a meme with PUT', () => {
    return request(app)
      .post('/api/v1/memes')
      .send({
        topField: 'some other text',
        image: 'some url',
        bottomField: 'some text'
      })
      .then(res => {
        expect(res.body).toEqual({
          _id: expect.any(String),
          topField: 'some other text',
          image: 'some url',
          bottomField: 'some text',
          __v:0
        });  
      });
  });

  // it('gets list of all memes', async() => {
  //   const meme = await Meme.create({ 
  //     topField: 'some other text',
  //     image: 'some url',
  //     bottomField: 'some text' 
  //   });

  //   return request(app)
  //     .get('api/v1/memes')
  //     .then(res => {
  //       const memeJSON = JSON.parse(JSON.stringify(meme));
  //       expect(res.body).toEqual([memeJSON]);
  //     });
  // });

  // it('gets meme by id', async() => {
  //   const meme = await Meme.create({
  //     topField: 'some other text',
  //     image: 'some url',
  //     bottomField: 'some text' 
  //   });

  //   return request(app)
  //     .get(`/api/v1/memes/${meme._id}`)
  //     .then(res => {
  //       expect(res.body).toEqual({
  //         _id:expect.any(String),
  //         topField: 'some other text',
  //         image: 'some url',
  //         bottomField: 'some text',
  //         __v: 0 
  //       });
  //     });
  // });
});
