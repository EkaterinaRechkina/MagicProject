const router = require("express").Router();

const { Product } = require("../db/models");

router
    .route("/")
    .get(async (req, res) => {
        try {
            let allProduct = await Product.findAll();
            res.json(allProduct);

        } catch (error) {
            console.log(error);
        }
    })
    .post(async (req, res) => {
        const { id } = req.body;

        try {
            const oneProduct = await Product.findOne({
                where: {
                    id,
                }
            });

            const newProduct = {
                id: id,
                author: oneProduct.author,
                title: oneProduct.title,
                img: oneProduct.img,
                price: oneProduct.price,
                status: true,
            }

            res.json(newProduct)

        } catch (error) {
            console.log(error);
        }
    })
    .delete(async (req, res) => {
        res.sendStatus(200);
    })



module.exports = router;
