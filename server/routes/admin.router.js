const router = require("express").Router();

const { User } = require("../db/models");

router
    .route("/")
    .post(async (req, res) => {
        try {
            const user = await User.findOne({where: {id: req.session.userId}})
            res.json((user.isAdmin))

        } catch (error) {
            console.log(error);
        }
    });

module.exports = router;
