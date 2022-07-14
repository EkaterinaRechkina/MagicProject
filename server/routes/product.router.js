const router = require("express").Router();

const { Product } = require("../db/models");

router
    .route("/")
    .post(async (req, res) => {
        const { author, title, description, img, user_id, price } = req.body;

        try {
            const newProduct = await Product.create({
                author: author,
                title: title,
                description:  description,
                img: img,
                user_id: user_id,
                price: price,
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

router
    .route("/myproducts")
    .post(async (req, res) => {

        const id = res.locals.userId;

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

router
    .route('/:id')
    .put(async (req, res) => {

        const { id, title, description, img, price } = req.body;

        await Product.update(
            { title, description, img, price },
            { where: { id } }
        );

        const currentProduct = Product.findOne({
            where:
                {
                    id
                }
        });
        res.json(currentProduct);
    })
    .delete(async (req, res) => {
        const { id } = req.params;
        await Product.destroy({ where: { id } });
        res.sendStatus(200);
    })
