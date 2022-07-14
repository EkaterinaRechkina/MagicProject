const router = require("express").Router();

const { User } = require("../db/models");

router
    .route("/")
    .post(async (req, res) => {
        try {
            // res.locals.userId

        } catch (error) {
            console.log(error);
        }
    });

module.exports = router;
