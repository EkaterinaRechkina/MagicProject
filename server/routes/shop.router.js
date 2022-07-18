const router = require("express").Router();

const { Product } = require("../db/models");

router
  .route("/")
  .get(async (req, res) => {
    try {
      let allProduct = await Product.findAll({
        order: [["updatedAt", "DESC"]],
      });
      const { q } = req.query;
      const keys = ["author", "title", "description"];

      const search = (data) => {
        return data.filter((item) =>
          keys.some((key) => item[key].toLowerCase().includes(q))
        );
      };

      res.json(search(allProduct));
    } catch (error) {
      console.log(error);
    }
  })
  .post(async (req, res) => {
    const { author, title, description, img, user_id, price } = req.body;

    try {
      const newProduct = await Product.create({
        author: author,
        title: title,
        description: description,
        img: img,
        user_id: user_id,
        price: price,
      });

      res.json({ newProduct });
    } catch (error) {
      console.log(error);
    }
  });

router.route("/myproducts").post(async (req, res) => {
  const id = res.locals.userId;

  try {
    const allUserProduct = await Product.findAll({
      where: {
        user_id: id,
      },
      order: [["updatedAt", "DESC"]],
    });

    res.json({ allUserProduct });
  } catch (error) {
    console.log(error);
  }
});

router
  .route("/:id")
  .put(async (req, res) => {
    const { id, title, description, img } = req.body;
    let { price } = req.body;
    if (!price) price = 0;

    await Product.update(
      { title, description, img, price: price },
      { where: { id } }
    );

    const currentProduct = await Product.findOne({
      where: { id },
    });

    res.json(currentProduct);
  })
  .delete(async (req, res) => {
    const { id } = req.params;
    await Product.destroy({ where: { id } });
    res.sendStatus(200);
  });

module.exports = router;
