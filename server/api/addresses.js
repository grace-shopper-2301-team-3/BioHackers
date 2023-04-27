const router = require("express").Router();
const Address = require("../db/models/Address");

router.get("/", async (req, res, next) => {
  try {
    const allAddresses = await Address.findAll();
    res.json(allAddresses);
  } catch (error) {
    next(error);
  }
});

router.get("/:id", async (req, res, next) => {
  try {
    const address = await Address.findByPk(req.params.id);
    res.json(address);
  } catch (err) {
    next(err);
  }
});

router.post("/", async (req, res, next) => {
  console.log(req.body);
  try {
    const response = await Address.create(req.body);
    res.json(response);
  } catch (err) {
    next(err);
  }
});

router.delete("/:id", async (req, res, next) => {
  try {
    const response = await Address.destroy({
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
    const response = await Address.update(req.body, {
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
