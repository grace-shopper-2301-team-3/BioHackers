const router = require("express").Router();
const Category = require("../db/models/Category");

router.get("/", async (req, res, next) => {
  try {
    const allCategories = await Category.findAll();
    res.json(allCategories);
  } catch (error) {
    next(error);
  }
});
router.get("/:id", async (req, res, next) => {
  try {
    const singleCategory = await Category.findByPk(req.params.id);
    res.json(singleCategory);
  } catch (error) {
    next(error);
  }
});

router.post("/", async (req, res, next) => {
  console.log(req.body);
  try {
    const response = await Category.create(req.body);
    res.json(response);
  } catch (err) {
    next(err);
  }
});
router.delete("/:id", async (req, res, next) => {
  try {
    const response = await Category.destroy({
      where: {
        id: req.params.id,
      },
    });
    res.json(response);
  } catch (err) {
    next(err);
  }
});

router.put("/:id", async (req, res, next) => {
  try {
    const response = await Category.update(req.body, {
      where: {
        id: req.params.id,
      },
    });
    res.json(response);
  } catch (err) {
    next(err);
  }
});

module.exports = router;
