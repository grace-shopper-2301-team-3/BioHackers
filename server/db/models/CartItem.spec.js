const { expect } = require('chai')
const { db, models: { CartItem } } = require('../index')
const Sequelize = require('sequelize')

describe('CartItem model', () => {
    beforeEach(() => {
        return db.sync({ force: true });
    });

    it('should require quantity to be an integer', async () => {
        const cartItem = await CartItem.create({});
        expect(cartItem.quantity).to.equal(1);
    });

    it('should have a quantity field that defaults to 1', async () => {
        const cartItem = await CartItem.create({});
        expect(cartItem.quantity).to.equal(1);
    });
});
