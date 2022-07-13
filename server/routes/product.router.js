const router = require("express").Router();

const { Product } = require("../db/models");

router
    .route("/")
    .post(async (req, res) => {
        const { author, title, description, img, user_id } = req.body;

        try {
            const newProduct = await Product.create({
                author: author,
                title: title,
                description:  description,
                img: img,
                user_id: user_id,
            })

            res.json({ newProduct })

        } catch (error) {
            console.log(error);
        }
    });

router
    .route("/all")
    .post(async (req, res) => {
        try {
            const allProduct = await Product.findAll();

            res.json({ allProduct })

        } catch (error) {
            console.log(error);
        }
    });

module.exports = router;

router
    .route("/:id")
    .post(async (req, res) => {

        const { id } = req.params;

        try {
            const allUserProduct = await Product.findAll({
                where: {
                    user_id: id,
                }
            });

            res.json({ allUserProduct })

        } catch (error) {
            console.log(error);
        }
    });

module.exports = router;
