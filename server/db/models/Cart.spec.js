const { expect } = require('chai')
const { db, models: { Cart } } = require('../index')
const Sequelize = require('sequelize')

describe('Cart model', () => {
    beforeEach(() => {
        return db.sync({ force: true });
    });

    it('should have a cartItems array, totalQuantity, totalPrice, fulfilled', async () => {
        const cart = await Cart.create({
            cartItems: [{ productId: 1, quantity: 2, price: 100 }, { productId: 2, quantity: 1, price: 50 },],
            totalQuantity: 3,
            totalPrice: 200,
            fulfilled: true,
        });

        expect(cart.cartItems).to.be.an('array');
        expect(cart.totalQuantity).to.be.a('number');
        expect(cart.totalPrice).to.be.a('number');
        expect(cart.fulfilled).to.be.a('boolean');
    });

    it('should create a cart with given values', async () => {
        const cartItems = [{ productId: 1, quantity: 2, price: 100 }, { productId: 2, quantity: 1, price: 50 },];
        const totalQuantity = 3;
        const totalPrice = 200;
        const fulfilled = true;

        const cart = await Cart.create({
            cartItems,
            totalQuantity,
            totalPrice,
            fulfilled,
        });

        expect(cart.cartItems).to.eql(cartItems);
        expect(cart.totalQuantity).to.eql(totalQuantity);
        expect(cart.totalPrice).to.eql(totalPrice);
        expect(cart.fulfilled).to.eql(fulfilled);
    });

    it('should not allow null values for totalQuantity and totalPrice', async () => {
        try {
            await Cart.create({ totalQuantity: null, totalPrice: null });
            throw new Error('Validation should have failed');
        } catch (err) {
            expect(err.name).to.equal('SequelizeValidationError');
        }
    });

    it('should not allow non-boolean values for fulfilled', async () => {
        try {
            await Cart.create({ fulfilled: 'true' });
            throw new Error('Validation should have failed');
        } catch (err) {
            expect(err.name).to.equal('SequelizeValidationError');
        }
    });
});
