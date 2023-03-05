const request = require('supertest');
const app = require('./index');
const { expect } = require('chai');

describe('Prueba de la ruta /models', () => {
  it('debe devolver los modelos esperados', (done) => {
    request(app)
      .get('/models?greater=380000&lower=400000')
      .expect(200)
      .end((err, res) => {
        if (err) return done(err);
        expect(res.body).to.deep.equal([  {
            "id": 3,
            "name": "RDX",
            "average_price": 395753,
            "brandId": 1,
            "createdAt": "2023-03-05T05:26:51.185Z",
            "updatedAt": "2023-03-05T05:26:51.185Z"
        },
        {
            "id": 120,
            "name": "Wrangler",
            "average_price": 396757,
            "brandId": 18,
            "createdAt": "2023-03-05T05:27:41.346Z",
            "updatedAt": "2023-03-05T05:27:41.346Z"
        },
        {
            "id": 140,
            "name": "CX9",
            "average_price": 383370,
            "brandId": 24,
            "createdAt": "2023-03-05T05:27:41.669Z",
            "updatedAt": "2023-03-05T05:27:41.669Z"
        },
        {
            "id": 282,
            "name": "X3",
            "average_price": 398124,
            "brandId": 4,
            "createdAt": "2023-03-05T05:27:42.900Z",
            "updatedAt": "2023-03-05T05:27:42.900Z"
        },
        {
            "id": 555,
            "name": "SEI2",
            "average_price": 383714,
            "brandId": 57,
            "createdAt": "2023-03-05T05:27:44.874Z",
            "updatedAt": "2023-03-05T05:27:44.874Z"
        },
        {
            "id": 619,
            "name": "Renegade",
            "average_price": 396920,
            "brandId": 18,
            "createdAt": "2023-03-05T05:27:45.402Z",
            "updatedAt": "2023-03-05T05:27:45.402Z"
        },
        {
            "id": 628,
            "name": "ELF 200",
            "average_price": 380933,
            "brandId": 43,
            "createdAt": "2023-03-05T05:27:45.448Z",
            "updatedAt": "2023-03-05T05:27:45.448Z"
        },
        {
            "id": 633,
            "name": "Ram Promaster",
            "average_price": 389350,
            "brandId": 30,
            "createdAt": "2023-03-05T05:27:45.469Z",
            "updatedAt": "2023-03-05T05:27:45.469Z"
        }]);
        done();
      });
  });
});

describe('Prueba de la ruta /brands/11/models', () => {
  it('debe devolver los modelos de la marca con id 11', (done) => {
    request(app)
      .get('/brands/11/models')
      .expect(200)
      .end((err, res) => {
        if (err) return done(err);
        expect(res.body).to.deep.equal([  {
            "id": 63,
            "name": "FF",
            "average_price": 0
        },
        {
            "id": 342,
            "name": "430",
            "average_price": 0
        },
        {
            "id": 343,
            "name": "458",
            "average_price": 0
        },
        {
            "id": 344,
            "name": "599",
            "average_price": 0
        },
        {
            "id": 345,
            "name": "612",
            "average_price": 0
        },
        {
            "id": 346,
            "name": "F12",
            "average_price": 0
        },
        {
            "id": 347,
            "name": "La Ferrari",
            "average_price": 0
        },
        {
            "id": 529,
            "name": "488",
            "average_price": 0
        },
        {
            "id": 62,
            "name": "California",
            "average_price": 0
        }]);
        done();
      });
  });
});