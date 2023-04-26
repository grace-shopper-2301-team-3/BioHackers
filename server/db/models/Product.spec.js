const { expect } = require("chai");
const {
  db,
  models: { Product },
} = require("../index");
const Sequelize = require("sequelize");

describe("Product model", () => {
  beforeEach(() => {
    return db.sync({ force: true });
  });

  describe("validations", () => {
    it("should require `productName`", async () => {
      const product = Product.build({});
      try {
        await product.validate();
        throw Error(
          "validation was successful but should have failed without `productName`"
        );
      } catch (err) {
        expect(err.message).to.contain("productName cannot be null");
      }
    });

    it("should require `productPrice`", async () => {
      const product = Product.build({});
      try {
        await product.validate();
        throw Error(
          "validation was successful but should have failed without `productPrice`"
        );
      } catch (err) {
        expect(err.message).to.contain("productPrice cannot be null");
      }
    });

    it("should require `categoryId`", async () => {
      const product = Product.build({});
      try {
        await product.validate();
        throw Error(
          "validation was successful but should have failed without `categoryId`"
        );
      } catch (err) {
        expect(err.message).to.contain("categoryId cannot be null");
      }
    });

    it("should have a description field of type Sequelize.TEXT", () => {
      expect(Product.rawAttributes.description.type).to.be.an.instanceof(
        Sequelize.TEXT
      );
    });

    it("should have a quantity field of type Sequelize.INTEGER", () => {
      expect(Product.rawAttributes.quantity.type).to.be.an.instanceof(
        Sequelize.INTEGER
      );
    });
  });
});
