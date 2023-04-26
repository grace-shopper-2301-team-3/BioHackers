const { expect } = require("chai");
const {
  db,
  models: { Category },
} = require("../index");
const Sequelize = require("sequelize");

describe("Category model", () => {
  it("should have a name, description, imageUrl", async () => {
    const category = await Category.create({
      name: "test",
      description: "test",
      imageUrl: "test",
    });
    expect(category.name).to.equal("test");
    expect(category.description).to.equal("test");
    expect(category.imageUrl).to.equal("test");
  });

  it('should have an imageUrl field that defaults to "default" ', async () => {
    const category = await Category.create({
      name: "Test Category",
      description: "A test category",
    });
    expect(category.imageUrl).to.equal("default");
  });
});
