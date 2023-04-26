const { expect } = require('chai')
const request = require('supertest')
const { db, models: { Product } } = require('../db')
const seed = require('../../script/seed');
const app = require('../app')

describe('Product routes', () => {
    beforeEach(async () => {
        await seed();
    });

    describe('/api/products', () => {
        it('GET /api/products', async () => {
            const res = await request(app)
                .get('/api/products')
                .expect(200);
            expect(res.body).to.be.an('array');
        });
    });

    describe('/api/products/:id', () => {
        it('GET /api/products/:id', async () => {
            const res = await request(app)
                .get('/api/products/1')
                .expect(200);
            expect(res.body).to.be.an('object');
        });
    });

    describe('DELETE /api/products/:id', () => {
        it('deletes a product', async () => {
            const productId = 1;

            const res = await request(app)
                .delete(`/api/products/${productId}`)
                .expect(200);

            expect(res.body).to.equal(1);

            const dbProduct = await Product.findByPk(productId);
            expect(dbProduct).to.be.null;
        });
    });

    // describe('POST /api/products', () => {
    //   it('creates a new product', async () => {
    //     const newProduct = {
    //       productName: 'New Product',
    //       productPrice: 10.99,
    //       imageUrl: 'default',
    //       description: 'This is a new product',
    //       categoryId: 1,
    //       quantity: 5,
    //     };

    //     const response = await request(app)
    //       .post('/api/products')
    //       .send(newProduct);

    //     expect(response.body).to.be.an('object');
    //     expect(response.body.productName).to.equal(newProduct.productName);
    //     expect(response.body.productPrice).to.equal(newProduct.productPrice);
    //     expect(response.body.imageUrl).to.equal(newProduct.imageUrl);
    //     expect(response.body.description).to.equal(newProduct.description);
    //     expect(response.body.categoryId).to.equal(newProduct.categoryId);
    //     expect(response.body.quantity).to.equal(newProduct.quantity);
    //   });
    // });

    //   describe('PUT /api/products/:id', () => {
    //     it('updates a product', async () => {
    //       const productId = 1;
    //       const updatedProduct = {
    //         productName: 'New Product',
    //         productPrice: 10.99,
    //         imageUrl: 'default',
    //         description: 'This is a new product',
    //         categoryId: 1,
    //         quantity: 5,
    //       };

    //       const res = await request(app)
    //         .put(`/api/products/${productId}`)
    //         .send(updatedProduct)
    //         .expect(200);

    //       expect(res).to.have.status(200);
    //       expect(res.body).to.be.an('array').with.lengthOf(1);
    //       expect(res.body[0]).to.equal(1);

    //       const dbProduct = await Product.findByPk(productId);
    //       expect(dbProduct).to.be.an('object');
    //       expect(dbProduct.productName).to.equal(updatedProduct.productName);
    //       expect(dbProduct.productPrice).to.equal(updatedProduct.productPrice);
    //     });
    //   });

});
