const { expect } = require("chai");
const request = require("supertest");
const {
  db,
  models: { Category },
} = require("../db");
const app = require("../app");

describe("Category routes", () => {
  before(async () => {
    await Category.bulkCreate([
      { name: "Category 1" },
      { name: "Category 2" },
      { name: "Category 3" },
    ]);
  });

  it("GET /api/categories", async () => {
    const res = await request(app).get("/api/categories");
    expect(res.status).to.equal(200);
    expect(res.body).to.be.an("array").with.lengthOf(3);
    expect(res.body[0].name).to.equal("Category 1");
    expect(res.body[1].name).to.equal("Category 2");
    expect(res.body[2].name).to.equal("Category 3");
  });

  it("GET /api/categories/:id", async () => {
    const category = await Category.findOne({ where: { name: "Category 1" } });
    const res = await request(app).get(`/api/categories/${category.id}`);
    expect(res.status).to.equal(200);
    expect(res.body.name).to.equal("Category 1");
  });

  it("POST /api/categories", async () => {
    const res = await request(app)
      .post("/api/categories")
      .send({ name: "Category 4" });
    expect(res.status).to.equal(200);
    expect(res.body.name).to.equal("Category 4");
    const category = await Category.findOne({ where: { name: "Category 4" } });
    expect(category).to.not.be.null;
  });

  it("PUT /api/categories/:id", async () => {
    const category = await Category.findOne({ where: { name: "Category 1" } });
    const res = await request(app)
      .put(`/api/categories/${category.id}`)
      .send({ name: "Updated Category 1" });
    expect(res.status).to.equal(200);
    expect(res.body).to.deep.equal([1]);
    const updatedCategory = await Category.findOne({
      where: { id: category.id },
    });
    expect(updatedCategory.name).to.equal("Updated Category 1");
  });

  it("DELETE /api/categories/:id", async () => {
    const category = await Category.findOne({ where: { name: "Category 2" } });
    const res = await request(app).delete(`/api/categories/${category.id}`);
    expect(res.status).to.equal(200);
    expect(res.body).to.equal(1);
    const deletedCategory = await Category.findOne({
      where: { id: category.id },
    });
    expect(deletedCategory).to.be.null;
  });
});
