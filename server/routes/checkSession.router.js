const router = require("express").Router();

const { User } = require("../db/models");

router
    .route("/")
    .post(async (req, res) => {
        try {
            if (res.locals.userId) {
                res.json(true);
            } else {
                res.json(false);
            }

        } catch (error) {
            console.log(error);
        }
    });

module.exports = router;
