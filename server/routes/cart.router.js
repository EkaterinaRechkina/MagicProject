const router = require("express").Router();

const { Order } = require("../db/models");

router
    .route("/checkout")
    .post(async (req, res) => {

       for (let i = 0; i < req.body.cart.length; i++) {
            await Order.create({ status: false, amount: req.body.cart[i].price, product_id: req.body.cart[i].id, user_id: req.body.userId})   
        }

    });

module.exports = router;
