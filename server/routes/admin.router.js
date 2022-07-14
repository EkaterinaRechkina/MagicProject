const router = require("express").Router();

const { User } = require("../db/models");

router
    .route("/")
    .post(async (req, res) => {
        const user = await User.findOne({where: {id: req.session.userId}})
        try {
            res.json((user.isAdmin))

        } catch (error) {
            console.log(error);
        }
    });

module.exports = router;
