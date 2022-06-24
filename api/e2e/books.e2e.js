const request = require('supertest');
const { MongoClient } = require('mongodb');
const { generateManyBooks } = require('../src/fakes/book.fake');

const createApp = require('../src/app');
const { config } = require('../src/config');

const DB_NAME = config.dbName;
const MONGO_URI = config.dbUrl;

describe('Test for books', () => {
  let app = null;
  let server = null;
  let database = null;
  beforeAll(async () => {
    app = createApp();
    server = app.listen(3001);
    const client = new MongoClient(MONGO_URI, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });
    await client.connect();
    database = client.db(DB_NAME);
  });

  afterAll(async () => {
    await server.close();
    await database.dropDatabase();
  });

  describe('Test for [GET] /api/v1/books', () => {
    test('Should return a list books', async () => {
      // Arange
      const seedData = await database.collection('books').insertMany([
        {
          name: 'Book1',
          year: '1998',
          author: 'John',
        },
        {
          name: 'Book2',
          year: '1999',
          author: 'John2',
        },
      ]);
      console.log(seedData);
      // Alt
      return request(app)
        .get('/api/v1/books')
        .expect(200)
        .then(({ body }) => {
          console.log(body);
          expect(body.length).toEqual(seedData.insertedCount);
        });
    });
  });
});
