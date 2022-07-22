const router = require("express").Router();
const multer = require('multer')

const { Product } = require("../db/models");

const storage = multer.diskStorage({
  destination(req, file, cb) {
    pathFile = 'public/img/products';
    cb(null, pathFile)
  },

  filename(req, file, cb) {
    cb(null, file.originalname);
  },
})

const upload = multer({ storage })

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
  .post(upload.array('product'), async (req, res) => {
    try {
      const obj = JSON.parse(JSON.stringify(req.body))
      const imgPath = `/img/products/${req.files[0].filename}`
      const {author, title, description, user_id, price} = obj;

      const newProduct = await Product.create({
        author: author,
        title: title,
        description: description,
        user_id: user_id,
        img: imgPath,
        price: price,
      });

      res.json({newProduct});
    } catch (err) {
      console.log(err);
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
  .put(upload.array('product'), async (req, res) => {
    const { id } = req.params;
    const obj = JSON.parse(JSON.stringify(req.body))
    const imgPath = `/img/products/${req.files[0].filename}`;

    const { author, title, description, user_id } = obj;
    let { price } = obj;

    if (!price) price = 0;

    await Product.update(
      {author, title, description, user_id, img: imgPath, price: price },
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
